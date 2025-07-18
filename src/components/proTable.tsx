import React, { useState, useEffect } from 'react';
import { Table, Checkbox, Pagination, Button, Space } from 'antd';
import type { ColumnsType, TableProps, TableRowSelection } from 'antd/es/table';
import type { PaginationProps } from 'antd/es/pagination';

interface ProTableProps<T> {
  dataSource: T[];
  columns: ColumnsType<T>;
  rowKey: string | ((record: T) => string);
  pagination?: PaginationProps | false;
  rowSelection?: {
    selectedRowKeys: React.Key[];
    onChange: (selectedKeys: React.Key[], selectedRows?: T[]) => void;
    getCheckboxProps?: (record: T) => { disabled: boolean };
    type?: 'checkbox' | 'radio';
    show?: boolean;
  };
  showSorter?: boolean;
  showHeader?: boolean;
  scroll?: { x?: number | true; y?: number | string };
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

function ProTable<T extends object>({
  dataSource,
  columns,
  rowKey,
  pagination = false,
  rowSelection,
  showSorter = true,
  showHeader = true,
  scroll,
  loading = false,
  className = '',
  style = {},
}: ProTableProps<T>) {
  // 处理排序状态
  const [sortedInfo, setSortedInfo] = useState<{
    field?: React.Key | readonly React.Key[];
    order?: 'ascend' | 'descend';
  }>({});
  
  // 处理分页
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  
  // 处理多选
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  
  // 同步外部传入的选中状态
  useEffect(() => {
    if (rowSelection?.selectedRowKeys) {
      setSelectedRowKeys(rowSelection.selectedRowKeys);
    }
  }, [rowSelection?.selectedRowKeys]);
  
  // 处理排序变化
  const handleChange: TableProps<T>['onChange'] = (pagination, filters, sorter) => {
    if (Array.isArray(sorter)) {
      // 多列排序处理
      console.log('Multiple sorters:', sorter);
    } else {
      setSortedInfo({
        field: sorter.field,
        order: sorter.order,
      });
    }
  };
  
  // 处理行选择
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    if (rowSelection?.onChange) {
      const selectedRows = dataSource.filter(item => {
        const key = typeof rowKey === 'function' ? rowKey(item) : item[rowKey as keyof T];
        return newSelectedRowKeys.includes(key as React.Key);
      });
      rowSelection.onChange(newSelectedRowKeys, selectedRows);
    }
  };
  
  // 构建行选择配置
  const rowSelectionConfig: TableRowSelection<T> | undefined = rowSelection?.show ? {
    selectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps: rowSelection.getCheckboxProps,
    type: rowSelection.type || 'checkbox',
    columnWidth: 60,
    fixed: 'left',
  } : undefined;
  
  // 处理分页变化
  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize) setPageSize(pageSize);
    if (pagination && typeof pagination === 'object' && pagination.onChange) {
      pagination.onChange(page, pageSize || 10);
    }
  };
  
  // 处理分页每页显示数量变化
  const handleShowSizeChange = (current: number, size: number) => {
    setPageSize(size);
    setCurrentPage(1);
    if (pagination && typeof pagination === 'object' && pagination.onShowSizeChange) {
      pagination.onShowSizeChange(current, size);
    }
  };
  
  // 添加排序功能到列
  const processedColumns = showSorter 
    ? columns.map(col => {
        if (col.sorter) {
          return {
            ...col,
            sortOrder: sortedInfo.field === col.key ? sortedInfo.order : null,
          };
        }
        return col;
      })
    : columns.map(col => ({ ...col, sorter: undefined }));
  
  // 计算当前页数据
  const paginatedData = pagination 
    ? dataSource.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : dataSource;
  
  // 渲染分页器
  const renderPagination = () => {
    if (pagination === false) return null;
    
    const defaultPagination: PaginationProps = {
      current: currentPage,
      pageSize: pageSize,
      total: dataSource.length,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: (total) => `共 ${total} 条`,
      onChange: handlePageChange,
      onShowSizeChange: handleShowSizeChange,
      pageSizeOptions: ['10', '20', '50', '100'],
    };
    
    return (
      <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end' }}>
        <Pagination {...defaultPagination} {...pagination} />
      </div>
    );
  };

  return (
    <div className={`pro-table-container ${className}`} style={style}>
      <Table
        columns={processedColumns}
        dataSource={paginatedData}
        rowKey={rowKey}
        onChange={handleChange}
        rowSelection={rowSelectionConfig}
        pagination={false}
        showHeader={showHeader}
        scroll={scroll}
        loading={loading}
      />
      {renderPagination()}
    </div>
  );
}

export default ProTable;