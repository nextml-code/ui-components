import styled from "styled-components";
import PropTypes from "prop-types";
import isDefined from "@codewell/is-defined";
import { useEffect, useState } from "react";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Login = ({ onChange, endpoint, ...props }) => {
  const [state, setState] = useState(
    {
      user: null,
      loggedIn: false,
      error: null,
    }
  );

  const setError = (error) => {
    setState({ error });
  };

  useEffect(() => {
    axios.get(`${endpoint}/user`)
      .then((result) => {
        setState({
          loggedIn: true,
          user: result.data,
        })
      })
      .catch((error) => {
        if (error.response) {
          switch (error.response.status) {
            case 401:
              return setState({ loggedIn: false });
            default:
              return setError(`${error.response.status} on user response`);
          }
        } else if (error.request) {
          setError(`no response from user request: ${error.message}`);
        } else {
          setError(`user request not sent: ${error.message}`);
        }
      })
  }, [axios]);

  useEffect(() => {
    onChange(state);
  }, [state]);

  const { loggedIn, user, error } = state;
  return (
    <Wrapper>
      {
        loggedIn
          ?<>Logged in as: { user.name }</>
          :<a href={`${endpoint}/login`}>Login</a>
      }
      {
        error ? <> [error: {error}] </>:<></>
      }
    </Wrapper>
  );
};

Login.propTypes = {
  onChange: PropTypes.func.isRequired,
  endpoint: PropTypes.string.isRequired,
};
