import React from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';
import { HiDownload } from 'react-icons/hi';
import PropTypes from 'prop-types';

function DownloadBtn({ data = [], fileName }) {
  return (
    <button
      type="button"
      onClick={() => {
        const info = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(info);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Document1');
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : 'data.xlsx');
      }}
      className="download-btn cursor-pointer"
    >
      <HiDownload fontSize={20} />
      Download
    </button>
  );
}

DownloadBtn.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      suburbName: PropTypes.string,
      cityName: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date),
        PropTypes.oneOf([null]),
      ]),
    }),
  ).isRequired,
  fileName: PropTypes.string.isRequired,
};
export default DownloadBtn;
