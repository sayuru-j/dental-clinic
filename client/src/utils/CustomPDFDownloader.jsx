import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const CustomPDFDownloader = ({ component, fileName }) => {
  const downloadPDF = async () => {
    const canvas = await html2canvas(component.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(fileName);
  };

  return (
    <button
      className="text-sm mt-5 font-medium text-white bg-accent rounded-full px-2 w-44 h-8"
      onClick={downloadPDF}
    >
      Download PDF
    </button>
  );
};

export default CustomPDFDownloader;
