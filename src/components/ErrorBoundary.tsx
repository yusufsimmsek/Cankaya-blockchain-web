import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
    
    this.setState({
      error,
      errorInfo
    })

    // Production'da error reporting servisine gönder
    if (import.meta.env.PROD) {
      // Burada Sentry, LogRocket vs. entegrasyonu yapılabilir
      console.error('Error reported to monitoring service')
    }
  }

  private handleRefresh = () => {
    window.location.reload()
  }

  private handleGoHome = () => {
    window.location.href = '/'
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl border border-white/20 dark:border-neutral-700/20">
            {/* Error Icon */}
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>

            {/* Error Message */}
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Bir Hata Oluştu
            </h1>
            
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
              Üzgünüz, beklenmeyen bir hata oluştu. Lütfen sayfayı yenilemeyi deneyin veya ana sayfaya dönün.
            </p>

            {/* Development Error Details */}
            {import.meta.env.DEV && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                  Hata Detayları (Geliştirici Modu)
                </summary>
                <div className="bg-neutral-100 dark:bg-neutral-700 rounded-xl p-4 text-xs font-mono text-neutral-700 dark:text-neutral-300 overflow-auto max-h-32">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleRefresh}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                <RefreshCw className="w-4 h-4" />
                Sayfayı Yenile
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-neutral-600 to-neutral-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-neutral-500/30 transition-all duration-300 hover:scale-105"
              >
                <Home className="w-4 h-4" />
                Ana Sayfa
              </button>
            </div>

            {/* Support Contact */}
            <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Sorun devam ederse, lütfen{' '}
                <a 
                  href="mailto:info@cankayablockchain.com" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  info@cankayablockchain.com
                </a>
                {' '}adresinden bize ulaşın.
              </p>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary 