"use client";
import React from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const DataTable = ({ 
    headers, 
    data, 
    onEdit, 
    onDelete, 
    onView,
    actions = true 
}) => {
    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            {headers.map((header, index) => (
                                <th
                                    key={index}
                                    className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    {header.label}
                                </th>
                            ))}
                            {actions && (
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {data.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={headers.length + (actions ? 1 : 0)}
                                    className="px-6 py-12 text-center text-gray-500"
                                >
                                    No data available
                                </td>
                            </tr>
                        ) : (
                            data.map((row, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                                    {headers.map((header, colIndex) => (
                                        <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {header.render
                                                ? header.render(row[header.key], row)
                                                : row[header.key]}
                                        </td>
                                    ))}
                                    {actions && (
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <div className="flex items-center gap-3">
                                                {onView && (
                                                    <button
                                                        onClick={() => onView(row)}
                                                        className="text-blue-600 hover:text-blue-800 transition-colors"
                                                        title="View"
                                                    >
                                                        <FaEye />
                                                    </button>
                                                )}
                                                {onEdit && (
                                                    <button
                                                        onClick={() => onEdit(row)}
                                                        className="text-green-600 hover:text-green-800 transition-colors"
                                                        title="Edit"
                                                    >
                                                        <FaEdit />
                                                    </button>
                                                )}
                                                {onDelete && (
                                                    <button
                                                        onClick={() => onDelete(row)}
                                                        className="text-red-600 hover:text-red-800 transition-colors"
                                                        title="Delete"
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;

