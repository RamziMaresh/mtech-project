"use client";
import * as React from "react";

import { useTable } from "react-table";
import fakeData from "./TThree_DATA.json";


export default function TableThree() {

    const data = React.useMemo(() => fakeData, []);
    const columns = React.useMemo(
      () => [
        {
            Header: "N",
            accessor: "id",
        },
        {
            Header: "Category",
            accessor: "category",
        },
        {
            Header: "Qualification",
            accessor: "qualification",
        },
    ],
    []
);

  
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({columns, data });

  return (
    <>
              <section className="page-section">
                
              <div className="container">
              <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </section>
      </>

  );
}
