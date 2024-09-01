

const bodyHTML =   `
<div id="overlay">
    <div class="overlayContainer">
      
      <div class="video-container"></div>
      <!--  <p style="text-align: center;color: white;"><img src="images1/seemore.svg"></p>-->
      <div class="eyeC "><i class="fa fa-eye eyeSize" aria-hidden="true"></i></div>
  </div>
</div>

<section id="header">
<nav class="navbar navbar-expand-md navbar-light sticky cIndex" id="navbar_sticky">

<div class="smallSearchC">
        <input type="text" name="search" placeholder="Search.." class="smallSearch"> 
        <span class="col_red" style="font-size: 25px; text-align: center;">&#10005</span>
</div>

<div class="container ">
  <a class="navbar-brand text-white fw-bold" href="index.html"><i class="fa fa-link col_red me-1"></i></a>
  
  <div>
    <img id="searchIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAADupAAA7qQEp6ar7AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAwBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyO34QAAAP90Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+6wjZNQAAGI5JREFUGBntwQnAV1PeB/DveZaepyetKIW0oLyWNEmyhUxqLBGy5aWGGBWJdBvKJE2NJQxuyqCQUYhBBiVEYkq2SoumDWnf61n/39d4jWl5jOr8zrnn3ns+H3ie53leTKnqh7Rs1/7Cyzpf0+OmvrcPurN/0Kt71ysvveCcNsfUrwwvoao2Obfn4EfHTZ69opT/RdE3n701Nrzj2raN8uElQe7hZ/W494UZa7i7Mt9+MHrQVafXV/Bi6oB2fUZ/XkxNG6cO735ydXhxktXk6gffXUNBS8cPuaQevBiodFq/19fTiG/G3nBMDjx31bnw/uklNGrzpIFtq8JzT97p986mHaUf9Guu4DmkQbdXNtOqFU9dtg88F+S2fWAeo1D2jwHHwotWzhmPrWGEFt19DLyoZJ8+YhUjt2BwU3j2ZZ0ybAUdMe/OI+FZVXfAUjrl0+uqwrMk57y/l9E5m584Hp4FDQcvo6Nm3lAdnlHZHd/K0GFbnz4enjG5V31F5737a3hGVOyxhLHwj/YKnrS9en/H2Pj84ix4kqr3X81Ymdc5F56UmoM3MHYWXZcPT8L+929mLC27eS94uuoPL2JsrepXDZ6Oxk+WMNbW/3FfeHuq3pgyxt7me6rA2xMVbt3CRPj2Eni779dzmRhvHQZv9+w/hklSPKQA3q7LuWkjE2bxefB21clfMIFeawhvV9R8ksm09Q/58H5JVre1TKyv2sH771p8zEQbVxfez6sxIsOE2xzkwvsZXVYxBb48BV55qo1jOpTdmQ1vJ80XMjXerQNvBz2LmSIrzoC3reovMV0yg7Lh/eS4RUydyfvD+3/qpmKm0Mq28P6lxitMp8zgHHg4fglT670DkHbqlhKm2Mp2SLd9XmO6ZYbkIMVO/Jqp9/6BSK2glB5XtUU6ZQ2n9y8lVyKN8l6g96M+SJ8qb9P7yVCFlNnvE3rbeDoXqdJwAb3tvF4JKdL0O3o7+GgfpMap6+ntZE5dpMT5hfTK8fURSIVry+iVa80JSIH+9H7OlrORdFkP0/t5pZ2RbBXG0vuvAiRZ5Yn0fsF9ColV8X16v+hhJFX2y/R2QX8k1OP0dsk1SKTB9HZNWQckUE96u6qwFRLn0gy9XbauCRKmTTFdUrhy4edTXn/u8QcGDXlo1LgJH85asqaELllWH4nSfBMdUDznb3/qctIRB9XIRTny923Q5PRuf35jcYYOmF8TCXLoSkZr+eRHbz770BzskopNOvYbPX0Do/VxZSRGnUWMzrJnrj6uOvZAnVNvfm0jozOxAhKi2ueMyOoXuh0GHTktb524lREZk4VEyH+PUdjwaq+jFQTknTLgvWJG4UEkQfbfaF3pW32Py4GggjZDZtC+25AAf6Ftn/TaDwYcNngJbbsasXcn7fr27iNhSlbrURtpVWl7xNy5tGnz6DOyYVSlyyeU0aINhyDW6q2lNZlJV1aGBfv3mUV7PslDjOV+RFuW31YX1jR7pJC2hIixobRk6fUVYVXtezfRko6Irfa046urKsC6vQeupRXrD0ZMHbSGNsy8NBuRqNJ3BW2YkYdYyv2QFkw7TyEyBTd8TQseRizdS/Mmn4FoVbh6Ac27EDF0No2bfjKil33FMpq2viFip+5qGra2WxacUOWBUhr2cR5iJucDGjaqJpxx9FQa9iBi5m6a9cXJcIm6ahXNOh+xclaGJm28OQeO2XtEhiata4AYOXA1TRq7Pxx03AyaNL0CYiNnCg2a1wZuyu6xjgb9GbExmOaUDcqDs2q9TIPORUw0KaUxy9vAaTcV05hvKiMW1BQa804dOK7FIhpzH2KhC00pG5gN51V/iaaUHoUYqLGShixvg1joWUxDpii4bzgNeacOYuLYhTSkM5zXIkMjygZmIzaqjaMZK2vAcdkzaMTyNoiV64toxHA4rjuN+EcdxEzzZTQhcyyctt86mvB6JcRO/fk04eMsuOxpmjA6FzFUcwZN6A6HnUIT7lOIpcqTaMC6WnBW7mwaECCu8p6nAU/BWX0or7Qz4itrGA1oBUfV3URxW85GrA2gvFm5cNM4iltzAmKuWxnF3QIn/Ybivj4CsdexiNI2HQgH5S2gtIV1kQC/LqS05+GgayltxSFIhA5llHY0nJOzkMI2HoOEuIbSxsI5V1BY0elIjP4UVtYYjsmaQ1mZi5EgD1PYSDjmQgrrgSTJeo6ySurBLZ9S1p1Ilry3KCuEU86irEeRNJVnUFRhbbhkKkW9lI3EqfUVRd0Dh7SmqMn5SKAG31HSpr3hjkmUNLcaEulXWynpDjjjeEra2gQJ1ZWS1laGK8ZT0jVIrNGUFMARTSnpWSTXXnMpaHlFuOF5CppfGQl21FYK6gEnHFZGOYVNkWhdKWhJLlzwJAVdh4QbTUG/hQMalFDOWCTdXnMpZ342ojecchZUQeIdtZVyLkHkqm6mmKJmSIGulDMFkfsd5fRAKoymnMMRtRkU8ybSofI3FHM/ItaMYgoPQUpcRDFr8hGtRyjmDqTGBIq5DJEqWE8pC/KRGocWUcq7iFRnivkNUuROimmEKH1AKS8gTSoupJR7EKHDKWXTgUiVcyhlZQVE5y5K6Y2UeZlSOiA6iyhkZi5Spt4WChmDyLSglJOROrdSyOYCRGUohYxC+lSYSyEdERG1lDLW1UQKtaGQ5xGREyhkIFLpPcrYshei8QBlbNoHqdSWQi5BJLK+oYx7kVIfU8ZLiMTJlFFYBynVgTIKqyAKD1HGMKSVmkUZnRCFJRRRUg+p1YkyxiACh1PGKKRX9gKKWJMN+3pTRFljpFhXyjgB9k2iiOeQZhW+poiBsK5yMUUcjVTrSRHTYd15FDEe6VawghIyNWHbCIo4Hin3e4q4HLYtpYRPkXb7FlPCaFh2JEX0Quq9TAkrs2BXb0oorYXUu4AimsOuVyhhPLy8NZRwE6xSqynhIngYRgnjYNVhlLAuHx5aUsJyWHUVJTwK73vzKeFg2PQEJZwE73v9KOEK2DSPAv6p4H2vXoYCRsCimpQwAN4P3qWAWbDoXEo4GN4PfksBmRqw524KmALv/1XZQgFnwp4pFHAtvB89SwGDYI3aRAF14f3ofyngNVjTkAIWwPu3AylgKaw5jwIehfeT+RRQHbbcTgGXwPvJcApoBVuep4D94P3kYgroDlvmUd9seP9RiwJGwJKCMup7CN42ZlLfVFjSnALOh7eNB6lvo4IdXagvsze8bZxHAQ1gx/3U9ym8bdUoo75zYcd46hsKbzszqK837JhFfWfB28491Pcw7NhMbaVV4G3nTOp7DVbUpL7P4W2vBvXNhhUtqO85eDtYSW1bYMVF1HcnvB28T321YENAfZfD28Fj1HccbHiE+o6Ft4NbqO9i2PAG9VWFt4NzqK8vbJhLbcvg7agR9Q2HDZup7R14O8otobbxsKAi9Q2Ht5O51PYRLDiA+nrB28nL1LYAFjShvjPh7eRualsPC06jvoPh7eQq6suFeRdSW1E2vJ2cRH21Yd611DYb3s5qUt+RMO9WansTXjmKqe0UmDeU2l6AV47V1HYBzBtFbSPhlWMRtV0L816htgfhleMLarsV5r1FbX+EV44PqG0QzHuf2vrCK8cb1HYPzJtGbT3gleMFansQ5n1GbVfCK8dIahsO8+ZQ2/nwyvEgtY2EeQuprQ28cvyR2v4K876ltpbwytGX2sbBvFXUdgS8cnSntldh3kZqOwheOa6gtgkwr5jaasArRwdqmwzzMtRWCV45zqS2KTCvkNpqwitHR2qbCPPWU1tDeOX4LbW9AvNWUNvR8MrRk9rGwLyl1HYSvHL0o7aRMG8Btf0GXjnuorYQ5s2mtovglWMYtd0D8z6htqvgleNpahsI8z6ktp7wyvEStfWFeZOprR+8crxFbT1h3gRquwteOf5BbV1h3jhqGwavHF9SWyeY9yi1PQ2vHF9T2/kwbwi1/Q1eOdZTWzuY15va3oa3s6wyajsF5nWhtsXwdlaf+n4F89pTW6YivJ20pb79YN6J1NcE3k5uoLaSLJh3GPV1hLeTkNqWwIKa1NcP3k7eorapsCAnQ22j4e3kG2p7Djasobbp8HZUmfruhw2fUNsGeDtqRn29YcOL1FcH3g4upb5LYcNQ6jsV3g4GUF8r2HA99f0O3g7GUF9D2HA29d0PbwefUl9F2HAk9f0d3vbUZmpbDSv2or7F8LZXn/o+hx2rqO8geNu5gvr+DjumUV9neNsZRX0Pwo7nqO9JeNtZQn1XwY47qO9reNs6mAKOhR0XUMCh8LbRlfrKCmBHIwq4Bt42/kp9c2BJ1hbqGwNvG99R3xjYMo36lit4PzmcAm6FLY9TwBHwftKdAs6CLT0p4Hp4PxlHAQfCltYU8BK8f8taTX1rYM2+FLA2C96PmlLAO7DnOwpoBu9HN1HAA7DnVQq4E96P3qeALrCnLwUsVvB+0JASmsGekyjhVHg/GEABRfmwJ7+IAp6A9y/qnxQwGTZNpYANBfC+dxIlDIBN91DCZfC+9yglnAKbzqOEN+AB+esoYGs+bKpJCWV14OEiSpgEu+ZRQm94GE8J/WDXE5TwBbxaJZRwIuy6nCKaIvVupITNFWBXzQwl3IfU+4QS3oRt0yhheS5S7iiK6Avb7qCIK5FyIyniONjWkiLmZiHV6pVQwsYc2Ja1miI6ItVCingN9j1DEZ8izWoXUsRNsO9yyjgLKXYPZdSDfTUzFDEV6bX3JoqYhihMo4zWSK2BlNEbUehLGZOQVlXWUkZ9RKEhhbRESvWljGmIxnTKeBXpVLCCMm5BNHpTyNFIpRsopD6icRCFjEUaVVhKGdMRlQ8pI9MCKdSbQvogKjdSyIxspM4BmyikAaJyQIZCrkfqPE8h0xGd9ylkfW2kTFtK6YPodKOUZ5AuefMppQGiU30rpZyGVOlPKVMQpacpZU4FpEiDrZTSCVFqRTG/R4qMp5SVeYjUPErZUg+pcS7F3IVo9aGYl5EWBYspJdMQ0apVQjHtkRKDKeZ1RG0cxSyqglQ4ophi2iNq7SjnWaRBpdkUszQbUctaQjnXIAVGUk4/RK8X5Ww9Col3JeWU1Eb0Kq2inDl7IeH+ZzPlPAcX3EZBTyHZCmZS0GlwQdV1FNQFifY4Bc2BGwZR0ObDkWD/S0nd4IZ9NlPQrAIkVuNNFPRNPhwxlJIeR1JV/IKSboAr6hRS0uVIqL9Q0rKKcMYjlLSpKRLpaorqBXfUL6Gk5Qcjgc4tpaTlBXDIKIpasB8S5+StFNUbLmlcRlGfVkXCNFlHUSsrwSljKevdfCRKg2WUFcAtR1PYi9lIkJrzKWt1ZTjmFQp7FMlReQaF3QbXHEdpg5AUeZMobE0VOOctSrseyZD1PKXdDvecSmmZS5AIwyhtWWU4aDylFV+I+FNDKe5KuKjBVkor64a4y3mS4j5ScFI/yrsD8VbwGsVlWsBNefMob3g2YqzGB5Q3Cq76NQ0Yl4fYOmAW5W2sDWeNoQHvVEVMNV5CA/rAXXU20IBP90MstVhFA+ZXgMNupAn/PBgxdMYmmnA2XJbzGU1Y3gyxc2kxTXgdbjs+QxM2XIB4yeqfoQnFjeG4x2jGQ3mIkVoTacZQuG6f1TRjekPExmnLaMjtcN7VNGTdBYiHrD+U0ZgArlMf0pSH8hAD+02iSQFc17SUpkxvCOed/h3NCuC6B2jMugvgtuw7ymhaAMdVWUZzHsqDw2q/QwsCOK5dhubMOAbOung5rQjguD/RoLKwGpzUaCJtCeC2nCk0afkVCs4p+GMR7QngtgNX06j3joRj2i+iVQHcdlaGRpXcWxkOqf8qbQvgtnto2Ncd4Yq8fltoXwCn5U6laW8eCie0mcdIBHDaQWtoWtHQ2ohc0xcZlQBOa0/zCofVQ6SOH88IBXDafbSgZFRjROb0txmtAC7L/Yg2lI09GlFQ53zEyAVwWb21tOPVlrAt6+LP6YIALjuPtkxqDZtyu8yjIwK47M+0Znr3fWDJoQOX0h0BHFZhOu0pfqlDBRhX43dT6ZYADmuwjjatGdYSJuW2f6GIzgngsNZFtGtev/owpPmDK+mkAA7rWEbLMpOvqgZxdYPZdFYAh3WnfaUfDWlTADH7XBjOodMCOGwgI1E0+Q+tKkBb1XPu/yxD5wVw2AhGZcuEvi1ysMcqtf3TtFLGQwB3Zb/ICG0YP6RzyxrYTQe0vu6B94sZIwHclf8uo7by/cduad84F7+oUtOLb3/m402MnwDuqvoZnVAy9+V7b7uhy4VtT2jSYN98/KjSfof86uQzL7661+0PTViSYWwFcFfthXRPyZrFs+Z8vb6MSRHAXYesoGdcAHcds5GecQHcdXoRPeMCuOviDD3jArirBz3zArhrAD3zArirV4aecQHc1amYnnEB3NV2Ez3jArirxSp6xgVwV+PF9IwL4K79Z9IzLoC7qk+hZ1wAd1V8hZ5xAdyV8wQ94wI4bAg94wI47MYMPdMCOOyyYnqmBXDYGZvomRbAYYfPpmdaAIcVjKRnWgCXXbGZnmEBXHbYTHqGBXBZxcfoGRbAaZ020jMrgNMafU7PrABOqziCnlkB3HbJBnpGBXDbIZ/QMyqA2/KHMS229hnGCARwXMf1TIW3D4EKGYEAjqv9VybfuqsVABUyAgFc13oOE25cbfxAhYxAANdV+P0WJtiy8/FvKmQEAjiv3t+YWH+phv9QISMQwH1nL2QifXUatqNCRiCA+yreWcTEKb2rInagQkYgQAw0msCEee9X2JkKGYEAcXDRN0yQ2e1RLhUyAgHioPJ9pUyIb7tm42eokBEIEAtHTWESbOhXCT9PhYxAgFhQl8xk3BU/VBP/lQoZgQDxoDp8zFh77mD8EhUyAgHiot37jK3JLbALVMgIBIiNUyYylr44G7tGhYxAgPho8QpjZ2I7hV2lQkYgQIw0GVvGGCl+6mjsDhUyAgHipPGoEsbEuj/tj92kQkYgQKzUf6SQMbCw517YfSpkBALEy/73babjPuqYjT2iQkYgQMxU6/4p3VX20knYYypkBALEzjHDN9BJ829vAB0qZAQCxE+lzh/QNavCltClQkYgQBz9z9Bv6Y7C59vnQoAKGYEAsZTVKlxOF2Qmd60GISpkBALEVHbrEasYsTm31YMgFTICAWIrp+3jaxiZz+46FsJUyAgEiLHsEwZOz9C6lc9cURsGqJARCBBvNTuNXkl7it/9fTMFQ1TICASIu6zm/SdvpQULwvaVYZIKGYEACVDhuJtfXE6D/vncdQ1hnAoZgQAJcciVf/kyQ2mZec/e0ro67FAhIxAgOaqe2G341E2UUTb76RtbVYFNKmQEAiSLOrjDgBfnF3PPlS2d8kSPEyrBPhUyAgESKOvAky7v//jbC0u567bMeWPEbZe3qpeDyKiQEQiQXDn1jm3X6YY7Hn52wozF6wsz3M7W1UvnfvLBxJeffWJozw7N9oUDVMgIBEiLCnvtXad+o6OaN21cd58CBQepkBEI4LlChYxAAM8VKmQEAniuUCEjEMBzhQoZgQCeK1TICATwXKFCRiCA5woVMgIBPFeokBEI4LlChYxAAM8VKmQEAniuUCEjEMBzhQoZgQCeK1TICATwXKFCRiCA5woVMgIBPFeokBEI4LlChYxAAM8VKmQEAniuUCEjEMBzhQoZgT7wXKFCRqATPFeokPZtbQ7PFSqkfd/UhucKFdK+D/PguUKFtG8kPGeokPb1gucMFdK60pbwnKFCWjcZnjtUSOvawnOHCmnbxwqeO1RI2y6A5xAV0rIvs+E5RIW0rDM8l6iQdi3KgucSFdKu4+E5RYW0ajA8t6iQNn0BzzEqpE0HwXOMCmlRN3iuUSHteR2ec1RIaworwXOOCmlNa3juUSFtuRyeg1RIS3rDc5EKacdQeE5SIa14Bp6bVEgbJsFzlAppwZfwXKVCmrcWnrNUSOO2wnOXCmnaIngOUyENmwrPZSqkWS/Cc5oKadQweG5TIU3qD89xKqRBXeG5ToU05xx4zlMhjakHz30qpCEz4cWBCmnGEHixoEIacSK8eFAhDViVDS8mVEh5T8GLDRVS3EXw4kOFFFZUFV6MqJCy/gwvVlRISZtqwYsXFVLQIHhxo0KKWVMNXuyokFICeDGkQspYVgAvjlRIEdfBiycVUsDfs+DFlAqpbW5VeLGlQmpa1whejKmQWsrawYs1FVJHb3gxp0LuuafgxZ66l3vqzXx4CdCliHvkvmx4idByGXdfYWd4SXHAdO6uZS3hJUfFZ7h7pu0PL1H6FHE3jMyHlzB1Hy/lLpp4LLwEajQ2w13wUWt4CdX0Nf6SmefCS7ATn13Ln1c0oVMWvGTLaXXXLJZn2WMdKsNLhfrdx8/byP8oXPze7c0UvFSp1PDEC7oP6HXpaYdVh+d5nuf9vP8DWbb6KYZkGkcAAAAASUVORK5CYII=" alt="">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>




  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mb-0 searchC">
      <li class="nav-item searchShow">
        <i class="arrow down col_red"> </i>
        <span id="closeB" class="col_red">&#10005</span>
        <input type="text" name="search" placeholder="Search.." id="searchBar">
      </li>

      <li class="nav-item hide">
        <l class="nav-link"> Action</l>
      </li>
      <li class="nav-item hide">
        <a class="nav-link">Animation</a>
      </li>
      <li class="nav-item hide">
        <a class="nav-link">Horror</a>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          More
        </a>
          <ul class="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item">Action</a></li>
          <li><a class="dropdown-item">Animation</a></li>
          <li><a class="dropdown-item">Horror</a></li>
          <li><a class="dropdown-item" >Thriller</a></li>
          <li><a class="dropdown-item" >Adventure</a></li>
          <li><a class="dropdown-item" >Comedy</a></li>
          <li><a class="dropdown-item" >War</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</nav>
</section>

<section id="center" class="center_home">
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
 <div class="carousel-indicators">
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class="" aria-current="true"></button>
   <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
 </div>
 <div class="carousel-inner">
   <div class="carousel-item active">
     <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSm6S3KTOE3hBkzCBRem-0xXSgVZRFimsci9Ajja1igeW6dN-ct" class="d-block w-100 h800" alt="...">
     <div class="carousel-caption d-md-block">
      <h1 class="font_60"> Deadpool & Wolverine</h1>
    <h6 class="mt-3">
     <span class="col_red me-3">
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star-o"></i>
   </span>
   8.0 (Imdb)      Year : 2024
    <a class="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block" href="#">Action</a>
    </h6>
    <p class="mt-3">Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse. He soon unites with his would-be pal, Wolverine, to complete the mission and save his world from an existential threat.
 </p>
    <p class="mb-2"><span class="col_red me-1 fw-bold">Starring:</span> Ryan Reynolds</p>
    <p class="mb-2"><span class="col_red me-1 fw-bold">Genres:</span> Action/Comedy</p>
    <p><span class="col_red me-1 fw-bold">Runtime:</span> 2h 07m</p>	
    <h6 class="mt-4"><a class="button" href='https://streamtape.com/v/OP4rkzmkgPCZj3m/Deadpool_and_Wolverine"
'><i class="fa fa-play-circle align-middle me-1"></i> Watch Stream</a></h6>
     </div>
   </div>
   <div class="carousel-item">
     <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS7Seydctw56g5hKHyBcpjSs8heFHA1QRf5hP5FThyjK5TV48wt" class="d-block w-100 h800" alt="...">
     <div class="carousel-caption d-md-block">
      <h1 class="font_60"> Avatar: The Last Airbender</h1>
    <h6 class="mt-3">
     <span class="col_red me-3">
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star-half-o"></i>
    <i class="fa fa-star-o"></i>
   </span>
    7.2 (Imdb)      Year : 2024
    <a class="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block" href="#">Action</a>
    </h6>
    <p class="mt-3">A young boy known as the Avatar must master the four elemental powers to save a world at war and fight a ruthless enemy bent on stopping him.</p>
    <p class="mb-2"><span class="col_red me-1 fw-bold">Starring:</span> Gordon Cormier</p>
    <p class="mb-2"><span class="col_red me-1 fw-bold">Genres:</span> Action-adventure</p>
    <p><span class="col_red me-1 fw-bold">Runtime:</span> 1h 43m</p>	
    <h6 class="mt-4"><a class="button" href="#"><i class="fa fa-play-circle align-middle me-1"></i> Watch Stream</a></h6>
     </div>
   </div>
   <div class="carousel-item">
     <img src="https://m.media-amazon.com/images/M/MV5BOTk4MjFhZTMtOWIxOS00YzE2LThkZGEtMzg0MDAyMmFiZmU1XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_FMjpg_UX1000_.jpg" class="d-block w-100 h800" alt="...">
     <div class="carousel-caption d-md-block">
      <h1 class="font_60"> Despicable Me 4</h1>
    <h6 class="mt-3">
     <span class="col_red me-3">
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star-o"></i>
    <i class="fa fa-star-o"></i>
   </span>
    6.4 (Imdb)      Year : 2024
    <a class="bg_red p-2 pe-4 ps-4 ms-3 text-white d-inline-block" href="#">Action</a>
    </h6>
    <p class="mt-3">Gru welcomes a new member to the family, Gru Jr., who's intent on tormenting his dad. However, their peaceful existence soon comes crashing down when criminal mastermind Maxime Le Mal escapes from prison and vows revenge against Gru.</p>
    <p class="mb-2"><span class="col_red me-1 fw-bold">Starring:</span> Steve Carell </p>
    <p class="mb-2"><span class="col_red me-1 fw-bold">Genres:</span> Family/Comedy</p>
    <p><span class="col_red me-1 fw-bold">Runtime:</span> 1h 34m</p>	
    <h6 class="mt-4 mb-0"><a class="button" href="#"><i class="fa fa-play-circle align-middle me-1"></i> Watch Stream</a></h6>
     </div>
   </div>
 </div>
 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Previous</span>
 </button>
 <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
   <span class="carousel-control-next-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Next</span>
 </button>
</div>
</section>`


const playHTML = `<section id="play">
<div class="play_m clearfix">
 <div class="container">
 <div class="play2 row mt-4">
  <div class="col-md-4 p-0">
   <div class="play2l">
     <div class="grid clearfix">
				  <figure class="effect-jazz mb-0">
					<a href="#"><img loading="lazy" src="https://m.media-amazon.com/images/M/MV5BMmViM2NjZDEtNDE4Mi00MWQ2LTk4ZmUtZDk3ZGQ1MTZiOTQxXkEyXkFqcGdeQXVyNjE2MzI5ODM@._V1_FMjpg_UX1000_.jpg" height="515" class="w-100"  alt="abc"></a>
				  </figure>
			  </div>
   </div>
  </div>
  <div class="col-md-8 p-0">
   <div class="play2r  bg_grey p-4">
	   <h5><span class="col_red">BEST MOVIE OF THE MONTH :</span> LIAM NEESON <span class="col_red">BLACKLIGHT</span><br>
THEY’RE GONNA NEED MORE MEN</h5>
      <h5 class="mt-3">Thriller</h5>
	  <hr class="line">
	  <p class="mt-3">A humble businessman with a buried past seeks justice when his daughter is killed in an act of terrorism. A cat-and-mouse conflict ensues with a government official, whose past may hold clues to the killers' identities.</p>
	  <div class="play2ri row mt-4">
	   <div class="col-md-6">
	    <div class="play2ril">
		 <h6 class="fw-normal">
Running Time: <span class="pull-right">1 hr 50 min</span></h6>
         <hr class="hr_1">
		  <h6 class="fw-normal">
Genre: <span class="pull-right">Action, Thriller</span></h6>
         <hr class="hr_1">
		 <h6 class="fw-normal">
Director: <span class="pull-right">Eget Nulla</span></h6>
         <hr class="hr_1">
		  <h6 class="fw-normal">
Stars: <span class="pull-right">Semp Port, Dapibus Diam</span></h6>
         <hr class="hr_1">
		 <h6 class="fw-normal">
Release Date: <span class="pull-right">2023</span></h6>
         <hr class="hr_1 mb-0">
		</div>
	   </div>
	   <div class="col-md-6">
	    <div class="play2rir">
		 <h6 class="fw-normal">Imdb - 9.2</h6>
         <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 92%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
          <h6 class="fw-normal mt-3">Semper - 7.3</h6>
         <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 73%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
          <h6 class="fw-normal mt-3">Dapibus - 9.0</h6>
         <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
          <h6 class="fw-normal mt-3">Ipsum - 8.3</h6>
         <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 83%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        <h6 class="fw-normal mt-3">Lorem - 7.9</h6>
         <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 79%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
		</div>
	   </div>
	  </div>
   </div>
  </div>
 </div>
</div>
</div>
</section>`


