package com.sudole.sudolTree.postBoard.service;

import com.sudole.sudolTree.exception.BusinessLogicException;
import com.sudole.sudolTree.exception.ExceptionCode;
import com.sudole.sudolTree.postBoard.entity.PostBoard;
import com.sudole.sudolTree.postBoard.repository.PostBoardRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PostBoardService {

    private final PostBoardRepository repository;

    public PostBoardService(PostBoardRepository repository) {
        this.repository = repository;
    }

    /* 전체 글 조회 */
    public List<PostBoard> getPostBoards() {
        return repository.findAll();
    }

    /* 글 작성 */
    public PostBoard savePostBoard(PostBoard postBoard) {
        return repository.save(postBoard);
    }

    /* 글 삭제 */
    public void deletePostBoard(Long postBoardId, String password) {
            PostBoard postBoard = findVerifiedPostBoard(postBoardId);
            if(postBoard.getPassword().equals(password)) {
                repository.deleteById(postBoardId);
            } else {
                throw new BusinessLogicException(ExceptionCode.PASSWORD_IS_WRONG);
            }
    }

    public PostBoard findVerifiedPostBoard(Long postBoardId) {
        Optional<PostBoard> optionalPostBoard = repository.findById(postBoardId);
        return optionalPostBoard.orElseThrow(() -> new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND));
    }
}
