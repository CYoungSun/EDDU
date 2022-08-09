package com.ssafy.api.service;

import com.ssafy.api.request.QuizCreateReq;
import com.ssafy.api.response.QuizRes;
import com.ssafy.db.entity.Quiz;
import com.ssafy.db.repository.QuizRepository;
import com.ssafy.db.repository.QuizbookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class    QuizServiceImpl implements  QuizService{
    @Autowired
    QuizbookRepository quizBookRepository;

    @Autowired
    QuizRepository quizRepository;

    @Override
    public QuizRes createQuiz(QuizCreateReq quizCreateReq) {
        Quiz quiz = quizCreateReq.toEntity();
        try {
            quizRepository.save(quiz);
        }
        catch(Exception e){
            e.printStackTrace();
            return null;
        }
        return new QuizRes(quiz);
    }

    @Override
    public boolean alterQuiz(Quiz quiz) {
        try{
            quizRepository.save(quiz);
        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
        return true;
    }

    @Override
    public boolean deleteQuiz(Long quizId) {
        try{
            quizRepository.deleteById(quizId);
        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
        return true;
    }

    @Override
    public List<QuizRes> searchByQuizbookId(Long quizbookId) {
        List<Quiz> quizs;
        try{
            quizs = quizRepository.findByQuizbookQuizbookId(quizbookId);
        }catch(Exception e){
            e.printStackTrace();
            return null;
        }
        List<QuizRes> quizResList = new ArrayList<>();
        for(Quiz q : quizs){
            quizResList.add(new QuizRes(q));
        }
        return quizResList;
    }
}
