export interface LogContext {
  postId?: string;
  action?: string;
  timestamp?: string;
  requestId?: string;
  userAgent?: string;
  ip?: string;
  error?: string;
  duration?: number;
}

export enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error'
}

export class Logger {
  private isDevelopment: boolean;

  constructor(environment = 'production') {
    this.isDevelopment = environment === 'development';
  }

  debug(message: string, context?: LogContext): void {
    if (this.isDevelopment) {
      this.log(LogLevel.DEBUG, message, context);
    }
  }

  info(message: string, context?: LogContext): void {
    this.log(LogLevel.INFO, message, context);
  }

  warn(message: string, context?: LogContext): void {
    this.log(LogLevel.WARN, message, context);
  }

  error(message: string, error?: Error, context?: LogContext): void {
    const errorContext = {
      ...context,
      error: error?.message || error?.toString(),
      stack: this.isDevelopment ? error?.stack : undefined
    };
    this.log(LogLevel.ERROR, message, errorContext);
  }

  private log(level: LogLevel, message: string, context?: LogContext): void {
    const logEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      ...context
    };

    console.log(JSON.stringify(logEntry));
  }
}

export const createLogger = (environment?: string): Logger => {
  return new Logger(environment);
};