import { fromEvent } from 'rxjs';
import { tap, map, takeUntil, switchMap } from 'rxjs/operators';

const canvasElem = document.querySelector("canvas");
const context = canvasElem.getContext("2d");
const mouseDownEvent = fromEvent(canvasElem, 'mousedown');
const mouseMoveEvent = fromEvent(canvasElem, 'mousemove');
const mouseUpEvent = fromEvent(canvasElem, 'mouseup');

mouseDownEvent.pipe(
  tap(
    (e) => {
      context.strokeStyle = "red";
      context.beginPath();
      context.moveTo(e.offsetX, e.offsetY);
    }
  ),
  switchMap(
    (e) => mouseMoveEvent.pipe(
      map(
        (e) => {
          return { x: e.offsetX, y: e.offsetY }
        }
      ),
      takeUntil( mouseUpEvent )
    )
  ),
  
).subscribe(
  (a) => {
    context.lineWidth = 3;
    context.lineTo(a.x, a.y);
    context.stroke();
    console.log('координаты: ', a);
  }
)