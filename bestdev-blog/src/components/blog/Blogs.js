import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../graphql/queries";
import { Grid } from "@mui/material";
import CardEl from "../shared/CardEl";


function Blogs() {
    const { loading, data, error } = useQuery(GET_BLOGS_INFO)
    if (loading) return <h2>در حال بروزرسانی ...</h2>
    if (error) return <h2>دریافت اطلاعات با خطا مواجه شده است!!</h2>
    console.log(data);
    return (
        <Grid container spacing={2}>
            {data.posts.map(post => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                    <CardEl {...post} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Blogs;


