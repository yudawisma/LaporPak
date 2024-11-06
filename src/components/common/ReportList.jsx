
import PropTypes from 'prop-types';

const ReportList = ({ reports }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Laporan Masuk</h3>
      <ul className="space-y-2">
        {reports.length > 0 ? (
          reports.map((report, index) => (
            <li key={index} className="border-b pb-2">
              <p className="font-medium">{report.name}</p>
              <p className="text-sm text-gray-500">{report.message}</p>
            </li>
          ))
        ) : (
          <li className="text-gray-500">Tidak ada laporan.</li>
        )}
      </ul>
    </div>
  );
};

ReportList.propTypes = {
  reports: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReportList;
