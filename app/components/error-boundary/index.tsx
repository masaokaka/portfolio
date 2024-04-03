import {
  type ErrorResponse,
  isRouteErrorResponse,
  useParams,
  useRouteError,
  useNavigate,
} from '@remix-run/react';
import { getErrorMessage } from '~/utils/misc';
import { Text } from '../text';
import {
  ArrowPathIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import { Title } from '../title';
import { Button } from '../button';

type StatusHandler = (info: {
  error: ErrorResponse;
  params: Record<string, string | undefined>;
}) => JSX.Element | null;

export function GeneralErrorBoundary({
  defaultStatusHandler = ({ error }) => (
    <Text isError>
      {error.status} {error.data}
    </Text>
  ),
  statusHandlers,
  unexpectedErrorHandler = (error) => (
    <Text isError>{getErrorMessage(error)}</Text>
  ),
}: {
  defaultStatusHandler?: StatusHandler;
  statusHandlers?: Record<number, StatusHandler>;
  unexpectedErrorHandler?: (error: unknown) => JSX.Element | null;
}) {
  const error = useRouteError();
  const params = useParams();
  const navigate = useNavigate();

  if (typeof document !== 'undefined') {
    console.error(error);
  }

  return (
    <div className="absolute inset-0 m-auto flex h-screen items-center justify-center space-x-3 bg-transparent">
      <div className="text-center">
        <div className="mb-5 mt-1">
          <ExclamationTriangleIcon className="m-auto size-20 text-error" />
          <Title isError>Something went wrong...</Title>
        </div>
        <div className="my-5">
          {isRouteErrorResponse(error)
            ? (statusHandlers?.[error.status] ?? defaultStatusHandler)({
                error,
                params,
              })
            : unexpectedErrorHandler(error)}
        </div>
        <Button handleClick={() => navigate('/')}>
          <ArrowPathIcon className="size-8" />
          &nbsp;&nbsp;Back to Top
        </Button>
      </div>
    </div>
  );
}
