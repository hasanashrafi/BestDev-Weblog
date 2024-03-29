import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_AUTHORS_INFO } from '../graphql/queries';
import { Avatar, Divider, Grid, Typography } from '@mui/material';

function Authors() {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO)
  if (loading) return <h2>در حال بروزرسانی ...</h2>
  if (error) return <h2>دریافت اطلاعات با خطا مواجه شده است!!</h2>
  console.log(data);
  
  return (
    <Grid container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: "4px" }}>
      {data.authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <a href={`/authors/${author.slug}`} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
              <Typography component="p" variant="p" color="text.secondary">{author.name}</Typography>
            </a>
          </Grid>
          {
            index !== data.authors.length - 1 && (
              <Grid item xs={12}>
                <Divider variant="middle" />
              </Grid>
            )
          }
        </React.Fragment>
      ))}
    </Grid>
  );
}

export default Authors;
