import { useSyncExternalStore, useCallback, useRef } from 'react';

export const useResizedObserver = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const subscribe = useCallback((onStoreChange: () => void) => {
    const observer = new ResizeObserver((entries) => {
      // 監視対象にリサイズが発生した場合、受け取ったコールバックを実行する。
      // なお、コールバックはuseSyncExternalStoreフックから渡される画面の再描画を行う関数
      entries.forEach(() => onStoreChange());
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const height = useSyncExternalStore(
    subscribe,
    () => ref.current?.clientHeight || 0,
    () => 0
  );
  const width = useSyncExternalStore(
    subscribe,
    () => ref.current?.clientWidth || 0,
    () => 0
  );
  return { ref, width, height };
};
