// Function to add cell text color to image clones for downloadAsPNG and downloadAsJPG
function applyCellTextColors(clone, sessionType) {
  // Get the cell color based on session
  const cellTextColor = getCellTextColor(sessionType);
  
  // Find all grid items in the table rows (not the header)
  const cells = clone.querySelectorAll('.chakra-grid:not(.timetable-header) .chakra-grid__item');
  
  // Apply the color to each cell
  cells.forEach((cell) => {
    (cell as HTMLElement).style.color = cellTextColor;
  });
}
