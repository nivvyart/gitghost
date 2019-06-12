import React from "react";

import moment from "moment";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const ProjectTitle = props => {
  return (
    <div>
      <p className="h1">{props.repository}</p>
      <p className="h5">
        Date Range :
        <span className="text-muted">
          {props.startDate} > {props.endDate}
        </span>
      </p>
      <Query
        query={gql`
          {
            repository(name: "${props.repository}", owner: "${
          props.username
        }") {
              url
              createdAt
              forkCount
              stargazers {
                totalCount
              }
              primaryLanguage {
                name
              }
              watchers {
                totalCount
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error </p>;

          // const end = new Date();
          // const start = moment(data.repository.createdAt).from;

          const age = moment(data.repository.createdAt).fromNow();

          if (data)
            return (
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="{data.repository.url}" target="_blank">
                    Link
                  </a>
                </li>
                <li class="list-inline-item">Created - {age}</li>
                <li class="list-inline-item">
                  forkCount - {data.repository.forkCount}
                </li>
                <li class="list-inline-item">
                  Stars - {data.repository.stargazers.totalCount}
                </li>
                <li class="list-inline-item">
                  primaryLanguage - {data.repository.primaryLanguage.name}
                </li>
                <li class="list-inline-item">
                  watchers - {data.repository.watchers.totalCount}
                </li>
              </ul>
            );
        }}
      </Query>
    </div>
  );
};

export default ProjectTitle;
