import React, { useState } from 'react';
import { Eye, Pencil,Check,X, Trash2 } from 'lucide-react';

const initialOrders = [
  {
    id: '#3413',
    name: 'Dr. Ernest Fritsch-Shanahan',
    email: 'august17@hotmail.com',
    items: 83,
    price: '$457.00',
    created: 'August 6, 2023 5:31 AM',
    modified: 'August 11, 2023 4:09 AM',
    status: 'Cancelled',
  },
  {
    id: '#9192',
    name: 'Mr. Gregory Medhurst-Lubowitz',
    email: 'general.bergstrom@yahoo.com',
    items: 21,
    price: '$426.00',
    created: 'July 22, 2023 4:23 PM',
    modified: 'August 13, 2023 2:09 PM',
    status: 'Cancelled',
  },
  {
    id: '#4983',
    name: 'Becky Goodwin',
    email: 'daniella_littel@gmail.com',
    items: 93,
    price: '$544.00',
    created: 'July 29, 2023 2:16 PM',
    modified: 'August 9, 2023 3:38 AM',
    status: 'Refunded',
  },
  {
    id: '#9114',
    name: 'Mrs. Ann Leuschke Jr.',
    email: 'favian49@yahoo.com',
    items: 63,
    price: '$282.00',
    created: 'July 26, 2023 1:52 AM',
    modified: 'August 12, 2023 5:33 AM',
    status: 'Cancelled',
  },
  {
    id: '#4849',
    name: 'Elmer Heathcote',
    email: 'efren.wehner@hotmail.com',
    items: 89,
    price: '$971.00',
    created: 'July 18, 2023 8:15 PM',
    modified: 'August 14, 2023 4:12 PM',
    status: 'Refunded',
  },
  {
    id: '#8540',
    name: 'Ida McKenzie',
    email: 'waino_bosco@hotmail.com',
    items: 64,
    price: '$889.00',
    created: 'July 20, 2023 1:35 PM',
    modified: 'August 13, 2023 11:04 AM',
    status: 'Cancelled',
  },
  {
    id: '#3114',
    name: 'Randal Dare',
    email: 'morton_lubowitz@hotmail.com',
    items: 23,
    price: '$566.00',
    created: 'June 25, 2023 1:49 PM',
    modified: 'August 11, 2023 4:18 PM',
    status: 'Cancelled',
  },
];

function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [orderList, setOrderList] = useState(initialOrders);
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editedOrder, setEditedOrder] = useState({});

  const handleView = (order) => {
    alert(`Viewing order: ${order.id}\nName: ${order.name}`);
  };

  const handleEdit = (order) => {
    setEditingOrderId(order.id);
    setEditedOrder({ ...order });
  };

  const handleDelete = (orderId) => {
    if (window.confirm(`Delete order ${orderId}?`)) {
      setOrderList(prev => prev.filter(order => order.id !== orderId));
    }
  };

  const handleSave = () => {
    setOrderList(prev =>
      prev.map(order =>
        order.id === editedOrder.id ? { ...editedOrder } : order
      )
    );
    setEditingOrderId(null);
  };

  const handleCancel = () => {
    setEditingOrderId(null);
    setEditedOrder({});
  };

  const handleChange = (field, value) => {
    setEditedOrder(prev => ({
      ...prev,
      [field]: field === 'items' ? parseInt(value, 10) : value,
    }));
  };

  const filteredOrders = orderList.filter(order =>
    order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Recent Orders</h1>
        <input
          type="text"
          placeholder="Search by patient name."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-xl p-2 w-64 text-sm"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-300 text-left">
            <tr>
              <th className="p-2">ORDER ID</th>
              <th className="p-2">CUSTOMER</th>
              <th className="p-2">ITEMS</th>
              <th className="p-2">PRICE</th>
              <th className="p-2">CREATED</th>
              <th className="p-2">MODIFIED</th>
              <th className="p-2">STATUS</th>
              <th className="p-2">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => {
              const isEditing = editingOrderId === order.id;

              return (
                <tr key={order.id} className="border-t">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">
                    {isEditing ? (
                      <>
                        <input
                          className="border rounded p-1 mb-1 w-full"
                          value={editedOrder.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                        />
                        <input
                          className="border rounded p-1 text-xs text-gray-500 w-full"
                          value={editedOrder.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                        />
                      </>
                    ) : (
                      <>
                        <div className="font-medium">{order.name}</div>
                        <div className="text-gray-500 text-xs">{order.email}</div>
                      </>
                    )}
                  </td>
                  <td className="p-2">
                    {isEditing ? (
                      <input
                        type="number"
                        className="border rounded p-1 w-16"
                        value={editedOrder.items}
                        onChange={(e) => handleChange('items', e.target.value)}
                      />
                    ) : (
                      order.items
                    )}
                  </td>
                  <td className="p-2">
                    {isEditing ? (
                      <input
                        className="border rounded p-1 w-20"
                        value={editedOrder.price}
                        onChange={(e) => handleChange('price', e.target.value)}
                      />
                    ) : (
                      order.price
                    )}
                  </td>
                  <td className="p-2">{order.created}</td>
                  <td className="p-2">{order.modified}</td>
                  <td className="p-2">
                    {isEditing ? (
                      <select
                        className="border rounded p-1"
                        value={editedOrder.status}
                        onChange={(e) => handleChange('status', e.target.value)}
                      >
                        <option value="Cancelled">Cancelled</option>
                        <option value="Refunded">Refunded</option>
                      </select>
                    ) : (
                      <span
                        className={`text-sm font-medium ${
                          order.status === 'Refunded'
                            ? 'text-gray-500'
                            : 'text-red-600'
                        }`}
                      >
                        {order.status}
                      </span>
                    )}
                  </td>
                  <td className="p-2">
                    <div className="flex items-center space-x-2">
                      {isEditing ? (
                        <>
                          <button onClick={handleSave} title="Save">
                            <Check className="w-4 h-4 text-green-600 hover:text-green-800" />
                          </button>
                          <button onClick={handleCancel} title="Cancel">
                            <X className="w-4 h-4 text-gray-600 hover:text-gray-800" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => handleView(order)} title="View">
                            <Eye className="w-4 h-4 text-blue-600 hover:text-blue-800" />
                          </button>
                          <button onClick={() => handleEdit(order)} title="Edit">
                            <Pencil className="w-4 h-4 text-green-600 hover:text-green-800" />
                          </button>
                          <button onClick={() => handleDelete(order.id)} title="Delete">
                            <Trash2 className="w-4 h-4 text-red-600 hover:text-red-800" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersPage;