import { useEffect, useRef } from "react";

// This is a hook, that works like useEffect except it doesn't run the very first time a component loads.
function useDidUpdateEffect(fn, inputs) {
	const didMountRef = useRef(false);

	useEffect(() => {
		if (didMountRef.current) {
			return fn();
		}
		didMountRef.current = true;
	}, [inputs]);
}

export default useDidUpdateEffect;
