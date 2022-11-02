import { CirclesWithBar } from 'react-loader-spinner';
import { Box } from "../Box";

const Loader = () => {
    return (
        <Box
              position="absolute"
              top="50%"
              left="50%"
          >
            <CirclesWithBar
                height="100"
                width="100"
                color="#3f51b5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
          /></Box>

    )
}

export default Loader