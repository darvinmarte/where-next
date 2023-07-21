// Custom helper function to format date
module.exports = {

formatDate:(dateString) => {
    const date = new Date(dateString);
    // Format the date using your desired format (e.g., MM/DD/YYYY)
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    return formattedDate;
  }
}
  //module.exports = formatDate;