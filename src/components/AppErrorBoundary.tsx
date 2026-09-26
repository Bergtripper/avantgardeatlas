import React from 'react';

interface AppErrorBoundaryState {
  hasError: boolean;
}

export class AppErrorBoundary extends React.Component<
  React.PropsWithChildren,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Avant-Garde Atlas render failure', error, info);
  }

  private recover = () => {
    window.location.assign(import.meta.env.BASE_URL);
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="min-h-screen bg-[#FBFBFA] text-[#121212] flex items-center justify-center p-6">
        <section className="w-full max-w-xl border border-[#121212] p-6 sm:p-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#D82B2B]">
            System // Recovery
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            The Atlas could not render this view.
          </h1>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-[#525252]">
            The interface encountered an unexpected client-side error. Your browser data has not
            been modified. Reload the Atlas home to recover.
          </p>
          <button
            type="button"
            onClick={this.recover}
            className="mt-6 min-h-11 border border-[#121212] bg-[#121212] px-4 py-2 font-mono text-xs uppercase tracking-wider text-white"
          >
            Reload Atlas
          </button>
        </section>
      </main>
    );
  }
}
