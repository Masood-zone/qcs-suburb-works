import { createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { HiPencilAlt } from "react-icons/hi";
const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("suburb", {
    header: "Suburb",
    meta: {
      type: "text"
    }
  }),
  columnHelper.accessor("cities", {
    header: "City",
    meta: {
      type: "text"
    }
  }),
  columnHelper.display({
    header: "Edit",
    id: "edit",
    cell: (props) => (
      <Link
        to={`/edit/${props.row.original.id}`}
        className="text-green-600 bg-opacity-10 py-3 px-2 rounded-md"
      >
        <HiPencilAlt fontSize={24} />
      </Link>
    )
  })
];
export default columns;
