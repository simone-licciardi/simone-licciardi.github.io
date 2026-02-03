# High-Performance Computing Lab for CSE ([401-3670-00L](https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lang=en&lerneinheitId=188305&semkez=2025S&ansicht=LEHRVERANSTALTUNGEN&))

## News
* Lecture begins on Monday, February 17, 14:15. (17.02.2025)
* Project 01 (due date 10.03.2025, 18:00 CET) was released and presented.
  (17.02.2025)
* Project 02 (due date 24.03.2025, 18:00 CET) was released. (03.03.2025)
* Project 03 (due date 07.04.2025, 18:00 CEST) was released and it will be
  presented on 24.03.2025. (17.03.2025)
* Project 04 (due date 17.04.2025, 18:00 CEST) was released and it will be
  presented on 07.04.2025. (31.03.2025)
* Project 05 (due date 12.04.2025, 18:00 CEST) was released and presented.
  (14.04.2025)
* Project 06 (due date 19.04.2025, 18:00 CEST) was released (29.04.2025) and
  presented (05.05.2025).
* Project 07 (due date **Friday** 30.04.2025, 18:00 CEST) was released
  (14.04.2025) and presented (19.05.2025).


## General information
* **Team** : [Dr. Roger Kaeppeli](mailto:roger.kaeppeli@sam.math.ethz.ch>),
             [Dr. Federico Gatti](mailto:federico.gatti@math.ethz.ch>),
             [Carla López Zurita](mailto:calopez@student.ethz.ch),
             [Alexander Pietak](mailto:apietak@student.ethz.ch),
             [Timo Schwab](mailto:tischwab@student.ethz.ch)
             and
             [Lily Watanabe](mailto:lily.watanabe@inf.ethz.ch)

* **Lab**  : Monday, 14:15 - 17:30, [HG](https://ethz.ch/bin/ethz/base/rooms/map?gebaeudeMap=HG&geschossMap=E&raumMap=41&farbcode=c010&lang=en) [E 41](https://ethz.ch/bin/ethz/base/rooms/floorplan?gebaeude=HG&geschoss=E&raumNr=41&lang=en) [>>](https://ethz.ch/bin/ethz/base/rooms/room?gebaeude=HG&geschoss=E&raumNr=41&lang=en)

* **Online Q&A**: Thursday, 18:00 - 19:00.
                  Registration is required (a registration link will be sent
                  weekly).
                  Attend only if you have questions.
                  Once registered, no confirmation will be sent - please ensure
                  you join the session.
                  If you register but cannot attend, please cancel in advance. 
                  Zoom Meeting ID: [598 578 282](https://ethz.zoom.us/j/598578282)


## Course Description
This HPC Lab for CSE will focus on the effective exploitation of
state-of-the-art HPC systems, with a special focus on Computational Science and
Engineering.
The contents of the course are tailored for 3rd year Bachelor students who are
interested in learning both, parallel programming models and scientific
mathematical libraries, and having hands-on experience using HPC systems.


## Contents
The primary goal of the course is for the students to learn the principles and
practices of basic numerical methods and HPC to enable large-scale scientific
simulations.
This goal is achieved through 6 to 8 hands-on mini-projects on HPC and CSE.
These projects may be accompanied by reading assignments on the theory of the
selected numerical method or the programming language.
Students are also offered some exercises on performance analysis, parallelism
detection and efficient development for modern many-core processors using
OpenMP and Message passing programming model (MPI).
This experience will prove very useful for individual semester projects in
other classes, where students may have to develop & deploy components of
massively parallel numerical simulation software.

The course may discuss some basic GPU computing, but we recommend to attend the
CSCS-USI Summer University 2025 on ["Effective High-Performance Computing and
Data Analytics"](https://www.cscs.ch/events/events/event-detail?tx_cscsevents_pi1%5Bcontroller%5D=Event&tx_cscsevents_pi1%5Bevent%5D=214&cHash=1006d33e32ee61e9a690dd93057c269b).
Further information will be announced during the semester.


## Lecture slides, projects and solutions
Lecture slides and projects will be provided as part of this git repository.


## Lab & Coursework
The lab requirements include the mini-projects and a final oral examination.
All of these count towards your final grade.
The final grade is calculated by averaging the two elements with weights

  * up to 6 to 8 mini-projects: 40%.
  * final oral exam: 60%
  * Value in ECTS: 7


## Programming
We will use C/C++, Python, Julia, MPI, and the Intel Math Kernel Library for
the mini-project programs.


## Final oral exam
In the oral exam, we will review these mini-projects and the theory behind
them, and discuss various aspects of these methods (performance, numerical
algorithms).
The oral exam will cover material from the entire course and we might discuss
your solutions.


## Submission
All assignments must be submitted on the
[SAM-UP](https://sam-up.math.ethz.ch/?lecture=401-3670-00)
platform on the assigned due date.
**Late submissions will not be accepted under any circumstances.**
We understand that unexpected circumstances may arise during the semester.
To provide some flexibility, each student is allowed to **skip one mini-project
assignment** without it affecting their final grade.


## Assignment collaboration policy
You are encouraged to discuss assignment questions with others; however, the
following rules apply:

* You must list the names of anyone you discussed the problems with in the
  designated section of the LaTeX report template.

* You must write your submission independently and in your own words.


## Regrading requests
If you feel that you deserve a better grade for a mini-project, you may submit
a request for regrading in writing to the TA.
This regrading request must be submitted within one week of receiving the
grades for the project.
Your request should briefly summarize the reasons you feel that the original
grade was unfair.
Your TA will take a day or two to reevaluate your project, and then issue a
decision.
If you are still not satisfied, you can appeal the decision to Roger Kaeppeli
(again, the appeal must be in writing).
Note that your entire assignment may be reevaluated, not just the question that
you submit for regrading.


## Useful resources

Useful links on computing:

* Hager & G. Wellein: Introduction to High Performance Computing for Scientists
  and Engineers, ISBN 143981192X, CRC Computational Science Series, 2010.
  Very useful.
  Available online within the ETH network
  [here](https://doi.org/10.1201/EBK1439811924).

* Goedecker & Hoisie: Performance Optimization of Numerically Intensive Codes.
  Like many HPC books, slightly outdated but still very useful.
  Does not cover recent developments like EPIC and SIMD instruction sets.
  Available online within the ETH network
  [here](https://doi.org/10.1137/1.9780898718218).

* Gropp, Lusk & Skjellum: Using MPI - Portable Parallel Programming with the
  Message-Passing Interface, MIT Press, 2014.
  It covers the basics without too much fluff.
  Available online within the ETH network
  [here](https://ieeexplore.ieee.org/servlet/opac?bknumber=6981847).

* MPI documentation can be found online in the
  [MPI forum](http://www.mpi-forum.org/).

* The [official OpenMP specification](http://www.openmp.org/blog/specifications/)
  contains quite a lot of good examples and can therefore be used as a good and
  readable reference for more information on OpenMP.

* Chapman, Jost & van der Pas: Using OpenMP.
  This book not only gives a thorough introduction to OpenMP, but also covers
  the most relevant performance and correctness issues, together with best
  practices.
  Available online within the ETH network
  [here](https://ieeexplore.ieee.org/servlet/opac?bknumber=6267237).

* van der Pas, Stotzer & Terboven: Using OpenMP - The Next Step: Affinity,
  Accelerators, Tasking, and SIMD.
  Available online within the ETH network
  [here](https://doi.org/10.7551/mitpress/10031.001.0001).

* Introductory and basic tutorials from Lawrence Livermore National Laboratory
  (LLNL):

  * [Introduction to Parallel Computing](https://computing.llnl.gov/tutorials/parallel_comp/)
  * [OpenMP tutorial](https://hpc-tutorials.llnl.gov/openmp/)
  * [MPI Tutorial](https://hpc-tutorials.llnl.gov/mpi/)


Useful links on numerical methods:

* C. Greif & U. Ascher: A First Course in Numerical Methods is designed for
  students and researchers who seek practical knowledge of modern techniques in
  scientific computing.
  Avoiding encyclopedic and heavily theoretical exposition, the book provides
  an in-depth treatment of fundamental issues and methods, the reasons behind
  the success and failure of numerical software, and fresh and easy-to-follow
  approaches and techniques.
  The book takes an algorithmic approach, focusing on techniques that have a
  high level of applicability to engineering, computer science, and industrial mathematics.
  (ETH link)
  Available online within the ETH network
  [here](ihttps://doi.org/10.1137/9780898719987).


## Recordings

Here you will find a list of the lecture recordings of the plenary sessions
(introduction, project descriptions, ...).
They are published Monday after the lab or on the following Tuesday.

 * [Introduction, Euler and Project01 (17.02.2025)](https://ethz.zoom.us/rec/share/wbdf4iHlMeINSHWsWY84VN2-YtZ8eFHFp_ibgDmh2DaTJn-gfFXVDvkVF7SWY0zL.KaUo3hEwMFmuVfTF?startTime=1739797967000)
 * [Project02 and OpenMP (10.03.2025)](https://ethz.zoom.us/rec/share/lLk75Vp9tosXaB5TORw3u1KoGARgKqmdlNgfBxPA1pn7lP7hFtgDlSV1JiMwAcY.LBtnmWe88Dd29aQC)
 * [Project03 (24.03.2025)](https://ethz.zoom.us/rec/share/KGEvJQ7lH9Li5tlilGqmOo2pvITFjlc-zlybSY-hlR6Z4C-FavQd3KIaA5FDmXqL.ItIeKZwlD-fXtcmk)
 * [Project04 and MPI (07.04.2025)](https://ethz.zoom.us/rec/share/RyGsialHTBi8zjliTysvPHfDuMAjWsrCsrOnhOtrE6e_laIljCZ0bVaZhfsjldql.PUp59A4SEQJKFsIU)
 * [Project05 (14.04.2025)](https://ethz.zoom.us/rec/share/zgCqi8InC-tMbMgXuNhyjkSqopfr6F1kGKHxoRyKOy1YkpnHCpHTLPUYyxpgNa3d.2nnxqiVho9fl7mtv)
 * [Project06 (05.05.2025)](https://ethz.zoom.us/rec/share/hCRGsIQ2lYckTWg-M027zDVqAWukED9NCLJMUA9HX9MDQaIaPGqvhVBs_8_N36xs.1h4SmzQDx0hp8zOm)
 * [Project07 (19.05.2025)](https://ethz.zoom.us/rec/share/6j-p9fg0gl4bPDY6WH7ZV46H8UAbQ2ZHHl9zy7RQJn1jCBa8GD3ytv--PK85LESe.bjoj7R8XGWFefmTa)
 * [Closing remarks (26.05.2025)](https://ethz.zoom.us/rec/share/BIN-5GGSQb_qtEb6huUvwwN1iIZmwK-wq4BxunphOW-yiCQ8ADZ-wojHxsaUp0Tx.7kzT_91Cu8s7Axcf)
