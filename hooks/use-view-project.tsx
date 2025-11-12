"use client";

import { useState, useEffect, useCallback } from "react";

export function useViewedProjects() {
  const [viewedProjects, setViewedProjects] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("viewedProjects") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("viewedProjects", JSON.stringify(viewedProjects));
  }, [viewedProjects]);

  const handleProjectView = useCallback((id: number) => {
    setViewedProjects((prev) => {
      if (prev.includes(id)) return prev;
      const updated = [...prev, id];
      localStorage.setItem("viewedProjects", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const projectsViewed = viewedProjects.length;

  return { viewedProjects, projectsViewed, handleProjectView };
}
