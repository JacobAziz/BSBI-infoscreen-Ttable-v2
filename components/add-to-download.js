// Code to insert after line 74 (after tableHeader.style.paddingTop = '8px';)
// in both PNG and JPG download functions:

        // Apply cell text colors based on session
        const cellTextColor = getCellTextColor(data.session);
        const tableRows = clone.querySelectorAll('.chakra-grid:not(.timetable-header)');
        tableRows.forEach(row => {
          const cells = row.querySelectorAll('.chakra-grid__item');
          cells.forEach(cell => {
            (cell as HTMLElement).style.color = cellTextColor;
          });
        });
