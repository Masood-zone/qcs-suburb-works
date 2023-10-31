import React, { useState, useEffect } from 'react';

import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable
} from '@tanstack/react-table';

import axios from 'axios';

import { HiOutlinePlusCircle, HiSearch, HiX } from 'react-icons/hi';

import { Link } from 'react-router-dom';

import Container from '../../../components/pagination/Container';

import Button from '../../../components/pagination/Button';

import Input from '../../../components/pagination/Input';

import PageCount from '../../../components/pagination/PageCount';

import PageSelect from '../../../components/pagination/PageSelect';

import DownloadBtn from '../../../components/downloadBtn';

import DebounceInput from '../../../components/debounceInput';

import Spinner from '../../../components/spinner';

import { toast } from 'react-toastify';

import columns from './data';

const SUBURB_URL = "http://localhost:8001/cities"

function Suburbs() {
    const [data, setData] = useState(() => []);

    const [globalFilter, setGlobalFilter] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTableData = async () => {
            const result = await axios(`${SUBURB_URL}`);
            setData(result.data);
            setIsLoading(false);
        };
        fetchTableData();
    }, []);

    const handleDelete = async id => {
        await axios.delete(`http://localhost:8001/cities/${id}`);
        const newArr = data.filter(prv => prv.id !== id);
        setData(newArr);
    };

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            globalFilter
        },
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
      <div className="w-full m-auto mt-5">
      <div className="w-full flex items-center justify-center flex-wrap py-[30px]">
        <div className="container">
          {/* Search records */}

          <div className="w-full m-auto">
            <div className="flex justify-between mb-2">
              <div className="w-full flex items-center ">
                <HiSearch fontSize={20} />

                <DebounceInput
                  value={globalFilter ?? ""}
                  onChange={(value) => setGlobalFilter(String(value))}
                  className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-blue-600 transition ease-out"
                  placeholder="Search all records..."
                />
              </div>

              <DownloadBtn data={data} fileName="Suburbs" />
            </div>
          </div>

          {/* Table */}
          <table className="bg-white rounded-xl overflow-hidden w-full m-auto relative border-collapse border-spacing-1 ">
            <thead className="bg-neutral-600 h-[60px]">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="pl-[8px] leading-[1.5] text-[18px] text-left"
                    >
                      {flexRender(
                        header.column.columnDef.header,

                        header.getContext()
                      )}
                    </th>
                  ))}

                  <th className="text-left">
                    <div className=" font-bold py-4">Delete</div>
                  </th>
                </tr>
              ))}
            </thead>

            <tbody className="">
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row, i) => (
                  <tr
                    key={row.id}
                    className={`${
                      i % 2 === 0
                        ? "bg-[#f5f5f5] text-[15px] text-gray-500 leading-[1.2] hover:bg-[#f5f5f5] hover:cursor-default hover:text-[#555] h-[75px]"
                        : "text-[15px] text-gray-500 leading-[1.2] hover:bg-[#f5f5f5] hover:cursor-default hover:text-[#555] h-[75px]"
                    }`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="pl-[8px] text-left">
                        {flexRender(
                          cell.column.columnDef.cell,

                          cell.getContext()
                        )}
                      </td>
                    ))}

                    <td>
                      <button
                        type="submit"
                        className="py-3 text-red-700"
                        onClick={() => handleDelete(row.original.id)}
                      >
                        <HiX fontSize={28} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="text-left h-32 text-black">
                  <td colSpan={12}>{isLoading ? <Spinner small/>: <p>No records found.</p>}</td>
                </tr>
              )}
            </tbody>

            <tfoot className="border-t-2 border-t-neutral-800">
              <tr className="">
                <th colSpan={table.getCenterLeafColumns().length} align="right">
                  <Link
                    to="/newCity"
                    className="flex gap-2 items-center justify-end"
                  >
                    New
                    <HiOutlinePlusCircle fontSize={45} />
                  </Link>
                </th>
              </tr>
            </tfoot>
          </table>
          {/* Pagintation */}

          <Container>
            <Button
              onClick={() => table.previousPage()}
              condtion={!table.getCanPreviousPage()}
              title="<"
            />

            <Button
              onClick={() => table.nextPage()}
              condtion={!table.getCanNextPage()}
              title=">"
            />

            <PageCount
              title="Page"
              firstCount={table.getState().pagination.pageIndex + 1}
              lastCount={table.getPageCount()}
            />

            <span>
              Go to page:
              <Input
                type="text"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;

                  table.setPageIndex(page);
                }}
              />
            </span>

            <PageSelect
              pageCount={[{ value: 10 }, { value: 20 }, { value: 30 }]}
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            />
          </Container>
        </div>
      </div>
    </div>
    );
}

export default Suburbs;
