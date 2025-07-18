import React, { useState } from 'react';
import ProTable from '@/components/ProTable';
import { Button, Space } from 'antd';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  disabled?: boolean;
}

const ProductTableExample = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [showSorter, setShowSorter] = useState(true);
  const [showPagination, setShowPagination] = useState(true);
  const [showSelection, setShowSelection] = useState(true);

  // 模拟数据
  const products: Product[] = [
    { id: '1', name: 'Laptop', category: 'Electronics', price: 1200, stock: 15 },
    { id: '2', name: 'Smartphone', category: 'Electronics', price: 800, stock: 30 },
    { id: '3', name: 'Desk Chair', category: 'Furniture', price: 150, stock: 10 },
    { id: '4', name: 'Coffee Table', category: 'Furniture', price: 200, stock: 5, disabled: true },
    { id: '5', name: 'Headphones', category: 'Electronics', price: 100, stock: 50 },
    { id: '6', name: 'Monitor', category: 'Electronics', price: 300, stock: 12 },
    { id: '7', name: 'Keyboard', category: 'Electronics', price: 80, stock: 25 },
    { id: '8', name: 'Mouse', category: 'Electronics', price: 40, stock: 35 },
    { id: '9', name: 'Bookshelf', category: 'Furniture', price: 120, stock: 7 },
    { id: '10', name: 'Desk Lamp', category: 'Home', price: 45, stock: 20 },
    { id: '11', name: 'Notebook', category: 'Stationery', price: 10, stock: 100 },
    { id: '12', name: 'Pen Set', category: 'Stationery', price: 25, stock: 60 },
  ];

  const columns = [
    {
      title: '产品名称',
      dataIndex: 'name',
      key: 'name',
    //   sorter: (a: Product, b: Product) => a.name.localeCompare(b.name),
    },
    {
      title: '类别',
      dataIndex: 'category',
      key: 'category',
      sorter: (a: Product, b: Product) => a.category.localeCompare(b.category),
    },
    {
      title: '价格 ($)',
      dataIndex: 'price',
      key: 'price',
      sorter: (a: Product, b: Product) => a.price - b.price,
      render: (value: number) => `$${value.toFixed(2)}`,
    },
    {
      title: '库存',
      dataIndex: 'stock',
      key: 'stock',
      sorter: (a: Product, b: Product) => a.stock - b.stock,
    },
  ];

  const getCheckboxProps = (record: Product) => ({
    disabled: record.disabled || false,
  });

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: '0 auto' }}>
      <h1>通用表格组件示例</h1>
      
      <Space style={{ marginBottom: 16 }}>
        <Button type={showSorter ? "primary" : "default"} onClick={() => setShowSorter(!showSorter)}>
          {showSorter ? "隐藏排序" : "显示排序"}
        </Button>
        <Button type={showPagination ? "primary" : "default"} onClick={() => setShowPagination(!showPagination)}>
          {showPagination ? "隐藏分页" : "显示分页"}
        </Button>
        <Button type={showSelection ? "primary" : "default"} onClick={() => setShowSelection(!showSelection)}>
          {showSelection ? "隐藏选择" : "显示选择"}
        </Button>
      </Space>
      
      <ProTable<Product>
        dataSource={products}
        columns={columns}
        rowKey="id"
        pagination={showPagination ? { pageSize: 5 } : false}
        rowSelection={showSelection ? {
          selectedRowKeys,
          onChange: setSelectedRowKeys,
          getCheckboxProps,
          type: 'checkbox',
          show: showSelection,
        } : undefined}
        showSorter={showSorter}
        scroll={{ y: 400 }}
        style={{ backgroundColor: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
      />
      
      {showSelection && selectedRowKeys.length > 0 && (
        <div style={{ marginTop: 16, padding: 12, background: '#f0f7ff', borderRadius: 4 }}>
          已选择 {selectedRowKeys.length} 项: 
          {selectedRowKeys.map(key => (
            <span key={key} style={{ marginLeft: 8, padding: '2px 8px', background: '#e6f4ff', borderRadius: 4 }}>
              {key}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductTableExample;