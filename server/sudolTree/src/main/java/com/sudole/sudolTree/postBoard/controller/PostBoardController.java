package com.sudole.sudolTree.postBoard.controller;

import com.sudole.sudolTree.postBoard.dto.PostBoardDeleteDto;
import com.sudole.sudolTree.postBoard.dto.PostBoardPostDto;
import com.sudole.sudolTree.postBoard.entity.PostBoard;
import com.sudole.sudolTree.postBoard.mapper.PostBoardMapper;
import com.sudole.sudolTree.postBoard.service.PostBoardService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/postBoards")
public class PostBoardController {

    private final PostBoardService boardService;
    private final PostBoardMapper mapper;

    public PostBoardController(PostBoardService boardService, PostBoardMapper mapper) {
        this.boardService = boardService;
        this.mapper = mapper;
    }

    /* 전체 글 조회 */
    @GetMapping
    public List<PostBoard> getPostBoards() {
        return boardService.getPostBoards();
    }

    /* 글 작성 */
    @PostMapping
    public ResponseEntity createPostBoard(@RequestBody PostBoardPostDto postBoardPostDto) {
        PostBoard postBoard = mapper.postBoardPostDtoToPostBoard(postBoardPostDto);
        PostBoard savePostBoard = boardService.savePostBoard(postBoard);

        return new ResponseEntity(mapper.postBoardToPostBoardResponseDto(savePostBoard), HttpStatus.CREATED);
    }

    /* 글 삭제 */
    @DeleteMapping("/{postBoard-id}")
    public ResponseEntity deletePostBoard(@PathVariable("postBoard-id") Long postBoardId,
                                          @RequestBody PostBoardDeleteDto postBoardDeleteDto) {
        boardService.deletePostBoard(postBoardId, postBoardDeleteDto.getPassword());
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }




}
