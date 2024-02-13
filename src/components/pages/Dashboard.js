import React, { useContext, useEffect } from "react";

import { BlogCard, Layout } from "../component/";
import { BlogContext } from "../contexts/BlogContext";

const Dashboard = () => {
    const { getBlog, blogs } = useContext(BlogContext);
    useEffect(() => {
        getBlog();
    }, []);
    return (
        <Layout>
            <p className="fs-2 text-center mt-5">Dashboard</p>
            <div className="container d-flex flex-wrap gap-3 justify-content-center">
                {blogs.map((item) => (
               <div
               key={item.id}
               style={{
                width: "20rem"
               }}
               >
                <BlogCard data={item} />
           </div>
                ))}
                </div>
        </Layout>
    );
};

export default Dashboard;