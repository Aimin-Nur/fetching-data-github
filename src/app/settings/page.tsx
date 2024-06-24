"use client"
import React, { useState, useEffect } from "react";
import Loading from '../loading';

export default function Settings() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate data fetching or rendering process
                await new Promise(resolve => setTimeout(resolve, 500));
                setIsLoading(false);
            } catch (error) {
                console.error("Error loading data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? <Loading /> : <div>Content Loaded</div>}
        </div>
    );
}
