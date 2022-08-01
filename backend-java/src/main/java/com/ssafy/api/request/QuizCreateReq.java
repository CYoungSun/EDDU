package com.ssafy.api.request;

import com.ssafy.db.entity.Quiz;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class QuizCreateReq {
    @ApiModelProperty(name="문제 내용", example="피카츄의 진화는?")
    private String content;

    @ApiModelProperty(name="객관식 = 0 주관식 = 1", example="0")
    private int type;

    @ApiModelProperty(name="이미지 주소", example="")
    private String quizPic;

    @ApiModelProperty(name="선택지 갯수(주관식은 1)", example="2")
    private int optionSize;

    @ApiModelProperty(name="선택지, /로 구분", example="라이츄/파이리")
    private String options;

    @ApiModelProperty(name="객관식은 답 번호(0부터 시작), 주관식은 정답", example="ssafy_web")
    private String answer;

    public Quiz toEntity(){
        return Quiz.builder().content(getContent())
                .type(getType())
                .quizPic(getQuizPic())
                .optionSize(getOptionSize())
                .options(getOptions())
                .answer(getOptions())
                .build();
    }
}