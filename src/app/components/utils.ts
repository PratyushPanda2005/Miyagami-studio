'use client'

interface Position {
    x: number;
    y: number;
}

/**
 * Preloads images specified by the CSS selector.
 * @function
 * @param {string} [selector='img'] - CSS selector for target images.
 * @returns {Promise<void>} - Resolves when all specified images are loaded.
 */
const preloadImages = (selector: string = 'img'): Promise<void> => {
    return new Promise((resolve) => {
        // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
        (window as any).imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

/**
 * Performs linear interpolation between two numbers.
 * @function
 * @param {number} a - The starting value.
 * @param {number} b - The target value.
 * @param {number} n - Normalization factor, typically between 0 and 1.
 * @returns {number} - Result of the linear interpolation.
 */
const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;

/**
 * Calculates the Euclidean distance between two points in a 2D space.
 * @function
 * @param {number} x1 - X-coordinate of the first point.
 * @param {number} y1 - Y-coordinate of the first point.
 * @param {number} x2 - X-coordinate of the second point.
 * @param {number} y2 - Y-coordinate of the second point.
 * @returns {number} - Distance between the two points.
 */
const distance = (x1: number, y1: number, x2: number, y2: number): number => Math.hypot(x2 - x1, y2 - y1);

/**
 * Retrieves the current position from a mouse or touch event.
 * @function
 * @param {MouseEvent | TouchEvent} ev - The mouse or touch event.
 * @returns {Position} - Object containing the x and y coordinates of the cursor or finger.
 */
const getPointerPos = (ev: MouseEvent | TouchEvent | null): Position => {
    let posx = 0;
    let posy = 0;
    const body = document.body;
    const docEl = document.documentElement;
    
    // If the event is not provided, use the global window event object.
    if (!ev) ev = window.event as MouseEvent | TouchEvent;

    // Handle touch events
    if ('touches' in ev && ev.touches) {
        if (ev.touches.length > 0) { // Check if there are any touches available
            posx = ev.touches[0].pageX;
            posy = ev.touches[0].pageY;
        }
    }
    // Handle mouse events
    else if ('pageX' in ev) {
        posx = ev.pageX;
        posy = ev.pageY;
    }
    else if ('clientX' in ev) {
        posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
        posy = ev.clientY + body.scrollTop + docEl.scrollTop;
    }

    return {x: posx, y: posy};
}

/**
 * Computes the distance between current and last recorded mouse positions.
 * @function
 * @param {Position} mousePos - Current mouse position with x and y coordinates.
 * @param {Position} lastMousePos - Last recorded mouse position with x and y coordinates.
 * @returns {number} - Distance between the two mouse positions.
 */
const getMouseDistance = (mousePos: Position, lastMousePos: Position): number => {
    return distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);
};

/**
 * Computes the new position in an array after moving by a given offset.
 * The array is treated as circular, meaning subtracting from the beginning 
 * wraps to the end of the array.
 *
 * @function
 * @param {number} position - The starting position in the array.
 * @param {number} offset - The number of positions to move backward.
 * @param {Array} arr - The array in which to compute the new position.
 * @returns {number} The new position in the array after moving by the offset.
 */
const getNewPosition = (position: number, offset: number, arr: any[]): number => {
    // Ensure offset is non-negative and is within the range of the array's length
    const realOffset = Math.abs(offset) % arr.length;
    
    // Check if subtracting the offset stays within the array's bounds
    if (position - realOffset >= 0) {
        return position - realOffset;
    } else {
        // If not, wrap around to the end of the array and compute the new position
        return arr.length - (realOffset - position);
    }
};

/**
 * Set the clip path for each of the clipInnerElements based on the provided grid dimensions.
 * @param {HTMLElement[]} clipInnerElements - The list of elements to set the clip paths on.
 * @param {number} numRows - The number of rows in the grid.
 * @param {number} numCols - The number of columns in the grid.
 */
const setClipPath = (clipInnerElements: HTMLElement[], numRows: number, numCols: number): void => {
    if (clipInnerElements.length !== numRows * numCols) {
        console.error('Mismatch between provided grid dimensions and number of elements.');
        return;
    }

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const idx = i * numCols + j;

            const top = (100 / numRows) * i + '%';
            const bottom = (100 / numRows) * (i + 1) + '%';
            const left = (100 / numCols) * j + '%';
            const right = (100 / numCols) * (j + 1) + '%';

            const clipPathValue = `polygon(${left} ${top}, ${right} ${top}, ${right} ${bottom}, ${left} ${bottom})`;

            clipInnerElements[idx].style.clipPath = clipPathValue;
        }
    }
}

// Exporting utility functions for use in other modules.
export {
    preloadImages,
    lerp,
    distance,
    getPointerPos,
    getMouseDistance,
    getNewPosition,
    setClipPath
};
export type { Position };