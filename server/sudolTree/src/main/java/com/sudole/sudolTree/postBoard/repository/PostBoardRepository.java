package com.sudole.sudolTree.postBoard.repository;

import com.sudole.sudolTree.postBoard.entity.PostBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostBoardRepository extends JpaRepository<PostBoard, Long> {
}
