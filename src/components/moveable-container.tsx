import { FC, useRef } from 'react';
import shallow from 'zustand/shallow';

import { useStore } from 'state';
import Moveable, {
  OnDrag,
  OnDragEnd,
  OnDragStart,
  OnResize,
  OnResizeEnd,
  OnResizeStart,
} from 'react-moveable';

interface MoveableContainnerProps {
  id: string;
}

export const MoveableContainner: FC<MoveableContainnerProps> = ({
  id,
  children,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const moveableRef = useRef<Moveable>(null);

  const positionStyles = useStore(
    (state) => ({
      top: state.styles[id]?.top,
      left: state.styles[id]?.left,
      width: state.styles[id]?.width,
      height: state.styles[id]?.height,
    }),
    shallow
  );

  const handleDragStart = ({ target, clientX, clientY }: OnDragStart) => {
    // console.log('onDragStart', target);
  };

  const handleDragEnd = ({ target, isDrag, clientX, clientY }: OnDragEnd) => {
    // console.log('onDragEnd', target, isDrag);
  };

  const handleDrag = ({
    target,
    beforeDelta,
    beforeDist,
    left,
    top,
    right,
    bottom,
    delta,
    dist,
    transform,
    clientX,
    clientY,
  }: OnDrag) => {
    // console.log('onDrag left, top', left, top);
    // console.log('onDrag translate', dist);
    target!.style.transform = transform;
  };

  const handleResizeStart = ({
    target,
    clientX,
    clientY,
    setOrigin,
    dragStart,
  }: OnResizeStart) => {
    // console.log('onResizeStart', target);
    // setOrigin(['%', '%']);
    // dragStart?.set()
  };

  // https://daybrush.com/moveable/storybook/?path=/story/basic--resizable
  const handleResize = ({
    target,
    width,
    height,
    dist,
    delta,
    direction,
    clientX,
    clientY,
  }: OnResize) => {
    // console.log('onResize', target);
    delta[0] && (target!.style.width = `${width}px`);
    delta[1] && (target!.style.height = `${height}px`);
  };

  const handleResizeEnd = ({
    target,
    isDrag,
    clientX,
    clientY,
  }: OnResizeEnd) => {
    // console.log('onResizeEnd', target, isDrag);
  };

  return (
    <>
      <div
        id={id}
        ref={elementRef}
        style={{
          position: 'absolute',
          ...positionStyles,
        }}
      >
        {children}
      </div>
      <Moveable
        ref={moveableRef}
        target={elementRef}
        origin={true}
        draggable={true}
        resizable={true}
        renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        onResize={handleResize}
        onResizeStart={handleResizeStart}
        onResizeEnd={handleResizeEnd}
      ></Moveable>
    </>
  );
};