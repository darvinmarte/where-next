// Custom helper function to format date
Handlebars.registerHelper('formatDate', function (dateString) {
    const date = new Date(dateString);
    // Format the date using your desired format (e.g., MM/DD/YYYY)
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return formattedDate;
  });