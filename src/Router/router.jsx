import { forwardRef } from "react";

function HeadLine({text},ref){
  return <div ref={ref}>{text}</div>
}
export default forwardRef (HeadLine);