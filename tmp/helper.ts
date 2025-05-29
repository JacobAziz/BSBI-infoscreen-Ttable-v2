// Function to add cell text color to image clones for downloadAsPNG and downloadAsJPG
function applyCellTextColors(clone: HTMLElement, sessionType: string): void {
  // Get the cell color based on session
  const cellTextColor = getCellTextColor(sessionType);
  
  // Find all grid items in the table rows (not the header)
  const cells = clone.querySelectorAll('.chakra-grid:not(.timetable-header) .chakra-grid__item');
  
  // Apply the color to each cell
  cells.forEach((cell) => {
    (cell as HTMLElement).style.color = cellTextColor;
  });
}

// Helper function to get cell text color based on session
function getCellTextColor(session: string): string {
  switch (session) {
    case 'Morning':
      return '#4a7fcb'; // Morning blue for cell text
    case 'Noon':
      return '#2d4d7c'; // Noon blue for cell text
    case 'Afternoon':
      return '#1a365d'; // Afternoon dark blue for cell text
    default:
      return '#4a7fcb'; // Default to morning blue
  }
}
