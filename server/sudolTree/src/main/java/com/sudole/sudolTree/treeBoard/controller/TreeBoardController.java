package com.sudole.sudolTree.treeBoard.controller;

import com.sudole.sudolTree.treeBoard.dto.TreeBoardPostDto;
import com.sudole.sudolTree.treeBoard.entity.TreeBoard;
import com.sudole.sudolTree.treeBoard.mapper.TreeBoardMapper;
import com.sudole.sudolTree.treeBoard.service.TreeBoardService;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/treeBoards")
@CrossOrigin(origins = "http://localhost:3000")
public class TreeBoardController {

    private final TreeBoardService boardService;
    private final TreeBoardMapper mapper;

    public TreeBoardController(TreeBoardService boardService, TreeBoardMapper mapper) {
        this.boardService = boardService;
        this.mapper = mapper;
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

    /* 수돌 트리 글 작성 */
    @PostMapping
    public ResponseEntity createBoard(@RequestBody TreeBoardPostDto treeBoardPostDto) {
        TreeBoard treeBoard = mapper.treeBoardPostDtoToTreeBoard(treeBoardPostDto);
        TreeBoard saveTreeBoard = boardService.saveTreeBoard(treeBoard);
        return new ResponseEntity(mapper.treeBoardToTreeBoardResponseDto(saveTreeBoard), HttpStatus.CREATED);
        /* 여기의 사진 index 번호를 저장할 index를 만들어주자
        * 그리고 Get을 하면 imagee[index]를 해서 골랐던 사진을 보여주자
        * 생각해보니까 내용을 필요 없을 듯? 닉네임만 보이면 되니까 */
    }
}
