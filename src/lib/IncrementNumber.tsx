import { useState, useEffect, useRef, FC } from "react";

// 判断是否为数字
const checkIsNumber = (val?: number | string, name?: string) => {
  if (typeof val === "number") {
    return val;
  }
  if (isNaN(Number(val))) {
    throw new Error(
      `the value of props [${name}] must be a number, or typeof Number(to) === 'number'`
    );
  } else {
    return Number(val);
  }
};

interface Props {
  to: number | string;
  speed?: number | string; // 递增速度，1 - 10, 越大速度越快
  callback?: (endValue: number) => void;
}

const IncrementNumber: FC<Props> = (props) => {
  const { to, callback } = props;
  const [count, setCount] = useState(0);
  const refCount = useRef(0)
  let animation: any = null;
  // 计算每次递增量
  const setStep = (to: number) => {
    const propSpeed = checkIsNumber(props.speed, "speed");
    const speed = propSpeed ? 12 - Math.max(1, Math.min(10, propSpeed)) : 5;
    return Math.floor((to - count) / (speed * 10));
  };
  // 增加数值，小数点根据to或者count.value本来的小数点位置来设置
  const increment = (to: number, step: number, toFixedLength: number) => {
    let next = Number(
      (refCount.current + step + Number(Math.random().toFixed(toFixedLength))).toFixed(
        toFixedLength
      )
    );
    refCount.current = next
    if (step === 0) return;
    setCount(step > 0 ? Math.min(next, to) : Math.max(next, to));
    if ((step > 0 && next >= to) || (step < 0 && next <= to)) {
      setCount(to);
      callback && callback(count);
      cancelAnimationFrame(animation);
      return;
    }
    animation = requestAnimationFrame(() => increment(to, step, toFixedLength));
  };

  const initAndIncrement = () => {
    cancelAnimationFrame(animation);
    const to = checkIsNumber(props.to, "to");
    const step = setStep(to);
    // toFixedLength:小数点位数，根据to或者count.value本来的小数点位数取最大，但最多两位
    const toDecimalLength = to.toString().split(".")[1]?.length || 0;
    const countDecimalLength = count.toString().split(".")[1]?.length || 0;
    const toFixedLength = Math.min(
      2,
      Math.max(toDecimalLength, countDecimalLength)
    );
    const _to = Number(to.toFixed(toFixedLength));
    animation = requestAnimationFrame(() =>
      increment(_to, step, toFixedLength)
    );
  };

  useEffect(() => {
    initAndIncrement()
  }, [to])

  return <>{count}</>;
};

export default IncrementNumber;
