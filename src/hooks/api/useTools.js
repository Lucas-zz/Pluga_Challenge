import useAsync from '../useAsync';

import * as tollApi from '../../services/tollApi';

export default function useTools() {
    const {
        data: tools,
        loading: tollLoading,
        error: tollError,
        act: getTools,
    } = useAsync(tollApi.getAllTools);

    return {
        tools,
        tollLoading,
        tollError,
        getTools,
    };
}