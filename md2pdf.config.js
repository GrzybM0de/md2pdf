module.exports = {
  stylesheet: ['styles.css'],
  body_class: ['premium'],
  marked_options: {
    gfm: true,
    breaks: true
  },
  pdf_options: {
    format: 'A4',
    printBackground: true,
    margin: { 
      top: '16mm', 
      right: '18mm', 
      bottom: '18mm', 
      left: '18mm' 
    },
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="font-size:8px;font-family:Lato,Arial,sans-serif;color:#808080;width:100%;padding:0 18mm;">
        ${process.env.GITHUB_REPOSITORY || 'Document'}
      </div>`,
    footerTemplate: `
      <div style="font-size:8px;font-family:Lato,Arial,sans-serif;color:#808080;width:100%;padding:0 18mm;text-align:right;">
        <span class="pageNumber"></span>/<span class="totalPages"></span>
      </div>`
  }
};
