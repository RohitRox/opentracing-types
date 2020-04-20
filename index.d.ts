declare module "opentracing";

export class SpanContext { }
export class SpanOptions { }
export class Span {
  context: any
  setTag: any
  setBaggageItem: any
  addTags: any
}
export class Tracer {
  startSpan: any
  inject: any
}
export function initGlobalTracer(tracer: Tracer): void
export function globalTracer(): Tracer
export class MockTracer extends Tracer { }
export function followsFrom(spanContext: SpanContext | Span): Reference
export class Reference { }
export const FORMAT_HTTP_HEADERS: string
