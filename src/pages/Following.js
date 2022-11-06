import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Loader, GetFetch } from '../components';

const Following = () => {
  const user = useOutletContext();

  const url = user.following_url.replace('{/other_user}', '');

  const { data, loading, error } = GetFetch(url);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{`Fetch error: ${error.message}`}</h2>;
  }

  return (
    <div className="list follow">
      {data?.map((following) => {
        return (
          <article className="followers" key={following.id}>
            <div>
              <div>
                <img src={following.avatar_url} alt="follower image" />
              </div>
              <p>
                <span>Login name:</span>{' '}
                <a href={following.html_url}>{following.login}</a>
              </p>
              <p className="external-link">
                <a href={following.html_url} target="_blank">
                  View Profile
                </a>
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Following;
