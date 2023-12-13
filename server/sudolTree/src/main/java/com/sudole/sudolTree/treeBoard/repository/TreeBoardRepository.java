package com.sudole.sudolTree.treeBoard.repository;

import com.sudole.sudolTree.treeBoard.entity.TreeBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TreeBoardRepository extends JpaRepository<TreeBoard, Long> {
}
