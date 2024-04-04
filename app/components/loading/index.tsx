import './index.css';

export function Loading() {
  return (
    <div className="absolute inset-0 m-auto flex h-screen items-center justify-center space-x-3 bg-transparent">
      <div className="animate-custom-bounce animate-delay-05 size-4">
        <div className="size-4 animate-pulse rounded-full bg-primary"></div>
      </div>
      <div className="animate-custom-bounce animate-delay-025 size-4">
        <div className="animate-delay-025 size-4 animate-pulse rounded-full bg-primary"></div>
      </div>
      <div className="animate-custom-bounce size-4">
        <div className="animate-delay-05 size-4 animate-pulse rounded-full bg-primary"></div>
      </div>
    </div>
  );
}
