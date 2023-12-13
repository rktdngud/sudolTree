package com.sudole.sudolTree.treeBoard.controller;

import com.sudole.sudolTree.treeBoard.entity.TreeBoard;
import com.sudole.sudolTree.treeBoard.service.TreeBoardService;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/treeBoards")
public class TreeBoardController {

    private final TreeBoardService boardService;

    public TreeBoardController(TreeBoardService boardService) {
        this.boardService = boardService;
    }

    /* 수돌트리 전체 글 조회 */
    @GetMapping
    public List<TreeBoard> getTreeBoards() {
        return boardService.findTreeBoards();
    }

    /* 수돌트리 특정 글 조회 */
    @GetMapping("/{treeBoard-id}")
    public ResponseEntity getTreeBoard(@PathVariable("treeBoard-id") Long id) {
        TreeBoard treeBoard = boardService.findTreeBoard(id);
        return new ResponseEntity(treeBoard, HttpStatus.OK);
    }
}
