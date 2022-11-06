import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Loader, GetFetch } from '../components';

const Followers = () => {
  const user = useOutletContext();

  const url = user.followers_url;

  const { data, loading, error } = GetFetch(url);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{`Fetch error: ${error.message}`}</h2>;
  }

  return (
    <div className="list follow">
      {data?.map((followers) => {
        return (
          <article className="followers" key={followers.id}>
            <div>
              <div>
                <img src={followers.avatar_url} alt="follower image" />
              </div>
              <p>
                <span>Login name:</span>{' '}
                <a href={followers.html_url}>{followers.login}</a>
              </p>
              <p className="external-link">
                <a href={followers.html_url} target="_blank">
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

export default Followers;
