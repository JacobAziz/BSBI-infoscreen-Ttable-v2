# APP Idea turning the excel sheet into presentable sheet

- **The problem am trying to solve**
    
    I have an excel sheet for classes timetable of business school called BSBI, the timetable is downloaded from the school system, the download version is usually unpresentable to be put in the info screen located in the school reception area to display the classes running in particular session.
    
    What I am trying to do is to turn the raw data excel sheet into a downloadable presentable file.
    
    **See example of the raw data excel sheet**
    
    | Summary | Room | Staff |
    | --- | --- | --- |
    | F25-Berlin-Oct 23-BA (Hons) Tourism and Hospitality Management G1-UCA-BA-Y2-T5-PW Y2 T&EM: Front Office Operations and Reservation Systems | 206 | Dr. Jan Vero (Dr.JVero) |
    | F25-Berlin-May 24-MSc Information Technology Management - Pathway Project Management - G1-UCA-MSc-Y1-T3-Pathway Project Management: IT Project Management | 207 | Dr. Alina Baskakova |
    | F25-Berlin-Feb 25-BSc (Hons) International Business and Management (International Route) G2-UCA-BAF-Y1-T1-English for Academic Purposes, Research and Study Skills | 211 A | Manuela  Napolitano (Manuela Napolitano) |
    | F25-Berlin-Oct 22-Oct 24-BSc (Hons) International Business and Management - Pathway One-Strategic Leadership - G1-UCA-BSc-Y3-T8-Pathway One-Strategic Leadership:Intersectoral Management: Government, Business and Non profits (Top Up) | 211 B | Umer Khayyam |
    | F25-Berlin-Oct 24-MSc Data Analytics G5-UCA-MSc -Y1-T2-Big Data Analytics | 212 | Ahmed Hassan (AHassan) |
    | F25-Berlin-Feb 25-Global MBA  G1-UCA-MBA-Y1-T1-Marketing and Business Environment | 213 | Dr.Safia Anjum (Dr.SAnjum) |
    | F25-Berlin-Feb 25-MSc Data Analytics G2-UCA-MSc -Y1-T1-Predictive  Analytics and Machine Learning using Python | 215 | Dr. Lawrence Ibeh (LIbeh) |
    | F25-Berlin-Oct 24-Global MBA  G2-UCA-MBA-Y1-T2-Strategic Management and Leadership | 216 | Dr. Syed Muhammad Ali |
    | F25-Berlin-Oct 24-MSc Data Analytics G4-UCA-MSc -Y1-T2-Big Data Analytics | 301 | Usman Akhtar (Dr. UAkhtar) |
    | F25-Berlin-Feb 25-MSc Digital Marketing  G1-UCA-MSc -Y1-T1-Strategic Marketing Management | 303 | Gemma Vallet (GVallet) |
    | F25-Berlin-Oct 24-MA Tourism, Hospitality and Event Management G1-UCA-MA-Y1-T2-Hospitality Operations Management | 305 | Dr Benedetta Piccio |
    | F25-Berlin-Oct 23-BSc (Hons) International Business and Management G3-UCA-BSc-Y2-T5-Human Resources and Organisational Behaviour | 308 | Dr. Kamyar EsmaeiliNasrabadi (Dr. KEsmaeiliNasrabadi) |
    | F25-Berlin-Feb 25-MSc Finance and Investment G1-UCA-MSc -Y1-T1-Corporate Finance | 309 | Dr. Karim Shehata (Dr. KShehata) |
    | F25-Berlin-Oct 24-MSc in Engineering Management G1-UNINNETTUNO-MSc -Y1-T2-Production Planning and Control | 313 | Sergio  Fuentes Ruiz (Dr. Sergio Fuentes Ruiz) |
    | F25-Berlin-Feb 25-MSc in Engineering Management G1-UNINNETTUNO-MSc -Y1-T1-Organizational Dynamics and Behavior | 405 | Dr. Barbara Renzi |
    | F25-Berlin-Feb 25-MSc Sports Management-UCA-MSc -Y1-T1-Corporate Finance in Sports Management | 407 | Rabia Luqman (Dr.RLuqman) |
    | F25-Berlin-Feb 25-BSc (Hons) International Business and Management G1-UCA-BA-Y1-T1-International Business Administration | D207 | olufunke popoola (Miss olufunke popoola) |
    | F25-Berlin-Feb 25-MSc Digital Marketing  G2-UCA-MSc -Y1-T1-Strategic Marketing Management | D304 | Flavio Andrew Santos (SAndrew) |
    | F25-Berlin-Oct 24-BSc (Hons) International Business and Management (International Route) G2-UCA-BAF-Y1-T2-English for Academic Purposes, Research and Study Skills | D305 | Ali Jaber Matin |
    
    **See example of the required presentable downloadable sheet.**
    
    ![image.png](APP%20Idea%20turning%20the%20excel%20sheet%20into%20presentable%20%201f3b06ab504980ff8776d64b05f4074f/image.png)
    

---

- **User-Input - Output :**
    - **User input**
        - the unpresntable raw data excel sheet
        - Date **: D**ay-**M**onth-Year as in  **:**  14-05-25
        - Session **:** Morning - Noon- Afternoon.
        - Timing **: 8: 00  or 12: 00  or 16: 00**
    - **the output**
        - the app transforms the excel sheet into **presentable sheet** as per the template provided.
        - the **presentable** sheet should be downloadable
        - Download format, i have to have two opition as PDF and as PNG.
        - in two formats pdf and png as per the criteria i detailed below.

---

- **How to transfer data from the Excel sheet to the Downloadable PDF and PNG**
    - **For example-1**
        - take the first row The data  from the excel sheet is as following
        - **Summary :**  *F25-Berlin-Oct 23-BA (Hons) Tourism and Hospitality Management G1-UCA-BA-Y2-T5-PW Y2 T&EM: Front Office Operations and Reservation Systems*
        - **Room :  206**
        - **Staff :**  Dr. Jan Vero
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : *BA (Hons) Tourism and Hospitality Management***
    - **Module would be** :  ***Front Office Operations and Reservation Systems***
    - **Intake would be** : ***Oct 23***
    - **Professor would be**: *whatever in the staff cell*  : ***Dr. Jan Vero***
    - **Room would be**: whatever in the Room Cell :**206**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - For example F25-Berlin-Oct 23 - BA (Hons) Tourism and Hospitality Management G1
        - Becomes *BA (Hons) Tourism and Hospitality Management*. And that's the program name.
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example *G1-UCA-BA-Y2-T5-PW Y2 T&EM: Front Office Operations and Reservation Systems*
        - ignor this strand *G1-UCA-BA-Y2-T5-PW Y2 T&EM:*
        - Becomes *Front Office Operations and Reservation Systems.* And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary ***F25-Berlin-Oct 23-BA (Hons) Tourism and Hospitality Management G1-UCA-BA-Y2-T5-PW Y2 T&EM : Front Office Operations and Reservation Systems***
    - the intake would be ***Oct 23***
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be ***Dr. Jan Vero***
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be **206**
    
    ---
    
- **For example-2**
    - take the row that has data  from the excel sheet  as following
    - **Summary :**  *F25-Berlin-Feb 25-BSc (Hons) International Business and Management G1-UCA-BA-Y1-T1-International Business Administration*
    - **Room :  D207**
    - **Staff :**  olufunke popoola (Miss olufunke popoola)
    
    ---
    
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be :** *BSc (Hons) International Business and Management*
    - **Module would be** :  *International Business Administration*
    - **Intake would be** : *Feb 25*
    - **Professor would be**: *whatever in the staff cell* :  **olufunke popoola ( ignore what’s between brackets in the cell)**
    - **Room would be**: whatever in the Room Cell : **D207**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - For example  *****F25-Berlin-Feb 25-BSc (Hons) International Business and Management G1*
        - Becomes *BSc (Hons) International Business and Management G1*. And that's the program name.
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example *G1-UCA-BA-Y1-T1-International Business Administration*
        - ignore this strand *G1-UCA-BA-Y1-T1-*
        - Becomes *International Business Administration .* And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary *F25-Berlin-Feb 25-BSc (Hons) International Business and Management G1-UCA-BA-Y1-T1-International Business Administration*
    - the intake would be ***Feb 25***
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be **olufunke popoola ( ignore what’s between brackets in the cell)**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be **D207**
    
    ---
    

- **For example-3**
    - take the row that has data  from the excel sheet  as following
    - **Summary : *F25-Berlin-Feb 25-Global MBA  G1-UCA-MBA-Y1-T1-Marketing and Business Environment***
    - **Room :  213**
    - **Staff :**  Dr.Safia Anjum (Dr.SAnjum)
    
    ---
    
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : *Global MBA***
    - **Module would be** :  ***Marketing and Business Environment***
    - **Intake would be** : ***Feb 25***
    - **Professor would be**: *whatever in the staff cell*  : **Dr.Safia Anjum** **( ignore what’s between brackets in the cell)**
    - **Room would be**: whatever in the Room Cell…**213**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - For example  :   ***F25-Berlin-Feb 25-Global MBA  G1***
        - Becomes ***Global MBA***. And that's the program name.
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example :  ***G1-UCA-MBA-Y1-T1-Marketing and Business Environment***
        - ignore this strand  :  ***G1-UCA-MBA-Y1-T1-***
        - Becomes  :  ***Marketing and Business Environment*** And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary ***F25-Berlin-Feb 25-Global MBA  G1-UCA-MBA-Y1-T1-Marketing and Business Environment***
    - the intake would be ***Feb 25***
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be  : Dr.Safia Anjum **( ignore what’s between brackets in the cell)**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be  :  **213**
    
    ---
    
    - **For example-4**
        - take the row that has data  from the excel sheet  as following
        - **Summary : *F25-Berlin-Feb 25-MSc Data Analytics G2-UCA-MSc -Y1-T1-Predictive  Analytics and Machine Learning using Python***
        - **Room :  215**
        - **Staff :**  Dr. Lawrence Ibeh (LIbeh)
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : *MSc Data Analytics***
    - **Module would be** :  ***Predictive  Analytics and Machine Learning using Python***
    - **Intake would be** : ***Feb 25***
    - **Professor would be**: *whatever in the staff cell ..*Dr. Lawrence Ibeh **( ignore what’s between brackets in the cell)**
    - **Room would be**: whatever in the Room Cell : **215**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - For example  ***F25-Berlin-Feb 25-MSc Data Analytics G2***
        - Becomes ***MSc Data Analytics***. And that's the program name.
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example ***G2-UCA-MSc -Y1-T1-Predictive  Analytics and Machine Learning using Python***
        - ignore this strand ***G2-UCA-MSc -Y1-T1-***
        - Becomes ***Predictive  Analytics and Machine Learning using Python*** And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary :  ***F25-Berlin-Feb 25-MSc Data Analytics G2-UCA-MSc -Y1-T1-Predictive  Analytics and Machine Learning using Python***
    - the intake would be **: *Feb 25***
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be : Dr. Lawrence Ibeh **( ignore what’s between brackets in the cell)**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be : **215**
    
    ---
    
    - **For example-5**
        - take the row that has data  from the excel sheet  as following
        - **Summary : F25-Berlin-Feb 25-MSc Digital Marketing  G1-UCA-MSc -Y1-T1-Strategic Marketing Management**
        - **Room :  303**
        - **Staff :**  **Gemma Vallet (GVallet)**
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : MSc Digital Marketing**
    - **Module would be** :  **Strategic Marketing Management**
    - **Intake would be** : **Feb 25**
    - **Professor would be**: *whatever in the staff cell* : **Gemma Vallet ( ignore what’s between brackets in the cell)**
    - **Room would be**: whatever in the Room Cell : **303**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - For example : **F25-Berlin-Feb 25-MSc Digital Marketing  G1**
        - Becomes ***MSc Digital Marketing*** And that's the program name.
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example :  **G1-UCA-MSc -Y1-T1-Strategic Marketing Management**
        - ignore this strand  : **G1-UCA-MSc -Y1-T1-**
        - Becomes **Strategic Marketing Management** **And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary **F25-Berlin-Feb 25-MSc Digital Marketing  G1-UCA-MSc -Y1-T1-Strategic Marketing Management**
    - the intake would be ****: **Feb 25**
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be : **Gemma Vallet ( ignore what’s between brackets in the cell)**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be : **303**
    
    ---
    
    - **For example-6**
        - take the row that has data  from the excel sheet  as following
        - **Summary : F25-Berlin-Feb 25-MSc Digital Marketing  G2-UCA-MSc -Y1-T1-Strategic Marketing Management**
        - **Room :  D304**
        - **Staff :**  **Flavio Andrew Santos (SAndrew)**
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : MSc Digital Marketing**
    - **Module would be** :  **Strategic Marketing Management**
    - **Intake would be** : **Feb 25**
    - **Professor would be**: *whatever in the staff cell* : **Flavio Andrew Santos ( ignore what’s between brackets in the cell)**
    - **Room would be**: whatever in the Room Cell : **D304**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - For example  ****: **F25-Berlin-Feb 25-MSc Digital Marketing  G2**
        - Becomes ****MSc Digital Marketing**. And that's the program name.
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example : **G2-UCA-MSc -Y1-T1-Strategic Marketing Management**
        - ignore this strand : **G2-UCA-MSc -Y1-T1-**
        - Becomes **Strategic Marketing Management**  **And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary **F25-Berlin-Feb 25-MSc Digital Marketing  G2-UCA-MSc -Y1-T1-Strategic Marketing Management**
    - the intake would be : **Feb 25**
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be : **Flavio Andrew Santos**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be **D304**
    
    ---
    
    - **For example-7**
        - take the row that has data  from the excel sheet  as following
        - **Summary : *F25-Berlin-Feb 25-MSc Finance and Investment G1-UCA-MSc -Y1-T1-Corporate Finance***
        - **Room :  309**
        - **Staff :**  **Dr. Karim Shehata (Dr. KShehata)**
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : *MSc Finance and Investment***
    - **Module would be** :  ***Corporate Finance***
    - **Intake would be** : ***Feb 25***
    - **Professor would be**: *whatever in the staff cell ..***Dr. Karim Shehata ( ignore what’s between brackets in the cell)**
    - **Room would be**: whatever in the Room Cell: **309**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - For example :  ***F25-Berlin-Feb 25-MSc Finance and Investment G1***
        - Becomes ***MSc Finance and Investment*** . And that's the program name.
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example :  ***G1-UCA-MSc -Y1-T1-Corporate Finance***
        - ignore this strand :  ***G1-UCA-MSc -Y1-T1-***
        - Becomes ***Corporate Finance*** And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary :  ***F25-Berlin-Feb 25-MSc Finance and Investment G1-UCA-MSc -Y1-T1-Corporate Finance***
    - the intake would be  ****:  ***Feb 25***
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be :  **Dr. Karim Shehata**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be :  **309**
    
    ---
    
    - **For example-8**
        - take the row that has data  from the excel sheet  as following
        - **Summary : *F25-Berlin-Feb 25-MSc in Engineering Management G1-UNINNETTUNO-MSc -Y1-T1-Organizational Dynamics and Behavior***
        - **Room :  405**
        - **Staff :**  **Dr. Barbara Renzi**
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : *MSc in Engineering Management***
    - **Module would be** :  ***Organizational Dynamics and Behavior***
    - **Intake would be** : ***Feb 25***
    - **Professor would be**: *whatever in the staff cell* : **Dr. Barbara Renzi**
    - **Room would be**: whatever in the Room Cell : **405**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - For example  ***F25-Berlin-Feb 25-MSc in Engineering Management G1***
        - Becomes ***MSc in Engineering Management*** And that's the program name.
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example : ***UNINNETTUNO-MSc -Y1-T1-Organizational Dynamics and Behavior***
        - ignore this strand : ***UNINNETTUNO-MSc -Y1-T1-***
        - Becomes ***Organizational Dynamics and Behavior*** And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary ***F25-Berlin-Feb 25-MSc in Engineering Management G1-UNINNETTUNO-MSc -Y1-T1-Organizational Dynamics and Behavior***
    - the intake would be ****: ***Feb 25***
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be : **Dr. Barbara Renzi**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be : **405**
    
    ---
    
    - **For example-9**
        - take the row that has data  from the excel sheet  as following
        - **Summary : *F25-Berlin-Oct 23-BSc (Hons) International Business and Management G3-UCA-BSc-Y2-T5-Human Resources and Organisational Behaviour***
        - **Room :  308**
        - **Staff :**  **Dr. Kamyar EsmaeiliNasrabadi (Dr. KEsmaeiliNasrabadi)**
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : *BSc (Hons) International Business and Management***
    - **Module would be** :  ***Human Resources and Organisational Behaviour***
    - **Intake would be** : ***Oct 23***
    - **Professor would be**: *whatever in the staff cell* : **Dr. Kamyar EsmaeiliNasrabadi ( ignore what’s between brackets in the cell)**
    - **Room would be**: whatever in the Room Cell : **308**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - For example  ***F25-Berlin-Oct 23-BSc (Hons) International Business and Management G3***
        - Becomes ***BSc (Hons) International Business and Management*** And that's the program name.
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example : ***G3-UCA-BSc-Y2-T5-Human Resources and Organisational Behaviour***
        - ignore this strand : ***G3-UCA-BSc-Y2-T5-***
        - Becomes ***Human Resources and Organisational Behaviour*** And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary ***F25-Berlin-Oct 23-BSc (Hons) International Business and Management G3-UCA-BSc-Y2-T5-Human Resources and Organisational Behaviour***
    - the intake would be ****: ***Oct 23***
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be **Dr. Kamyar EsmaeiliNasrabadi ( ignore what’s between brackets in the cell)**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be **405**
    
    ---
    
    - **For example-10**
        - take the row that has data  from the excel sheet  as following
        - **Summary : F25-Berlin-Oct 24-Global MBA  G2-UCA-MBA-Y1-T2-Strategic Management and Leadership**
        - **Room :  216**
        - **Staff :**  **Dr. Syed Muhammad Ali**
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : Global MBA**
    - **Module would be** :  **Strategic Management and Leadership**
    - **Intake would be** : **Oct 24**
    - **Professor would be**: *whatever in the staff cell* : Dr. Syed Muhammad Ali
    - **Room would be**: whatever in the Room Cell…**216**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - For example : **F25-Berlin-Oct 24-Global MBA  G2**
        - Becomes ***Global MBA***  And that's the program name.
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example : **G2-UCA-MBA-Y1-T2-Strategic Management and Leadership**
        - ignore this strand : **G2-UCA-MBA-Y1-T2-**
        - Becomes **Strategic Management and Leadership** **And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary **F25-Berlin-Oct 24-Global MBA  G2-UCA-MBA-Y1-T2-Strategic Management and Leadership**
    - the intake would be **: Oct 24**
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be : **Dr. Syed Muhammad Ali**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be : **216**
    
    ---
    
    - **For example-11**
        - take the row that has data  from the excel sheet  as following
        - **Summary : *F25-Berlin-Oct 24-MA Tourism, Hospitality and Event Management G1-UCA-MA-Y1-T2-Hospitality Operations Management***
        - **Room :  305**
        - **Staff :**  Dr Benedetta Piccio
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : *MA Tourism, Hospitality and Event Management***
    - **Module would be** :  ***Hospitality Operations Management***
    - **Intake would be** : ***Oct 24***
    - **Professor would be**: *whatever in the staff cell* : **Dr Benedetta Piccio**
    - **Room would be**: whatever in the Room Cell…**305**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - For example  ***F25-Berlin-Oct 24-MA Tourism, Hospitality and Event Management G1***
        - Becomes ***MA Tourism, Hospitality and Event Management*** And that's the program name.
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example ***G1-UCA-MA-Y1-T2-Hospitality Operations Management***
        - ignore this strand ***G1-UCA-MA-Y1-T2-***
        - Becomes ***Hospitality Operations Management*** And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary ***F25-Berlin-Oct 24-MA Tourism, Hospitality and Event Management G1-UCA-MA-Y1-T2-Hospitality Operations Management***
    - the intake would be ***Oct 24***
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be **Dr Benedetta Piccio**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be :  **305**
    
    ---
    
    - **For example-12**
        - take the row that has data  from the excel sheet  as following
        - **Summary : F25-Berlin-Oct 24-MSc Data Analytics G4-UCA-MSc -Y1-T2-Big Data Analytics**
        - **Room :  301**
        - **Staff :**  Usman Akhtar (Dr. UAkhtar)
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : MSc Data Analytics**
    - **Module would be** :  **Big Data Analytics**
    - **Intake would be** : **Oct 24**
    - **Professor would be**: *whatever in the staff cell ..***Usman Akhtar** **( ignore what’s between brackets in the cell)**
    - **Room would be**: whatever in the Room Cell :**301**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - For example  **F25-Berlin-Oct 24-MSc Data Analytics G4**
        - Becomes ***MSc Data Analytics**.* And that's the program name.
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example :  **G4-UCA-MSc -Y1-T2-Big Data Analytics**
        - ignore this strand :  **G4-UCA-MSc -Y1-T2-**
        - Becomes ***Big Data Analytics*** And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary **F25-Berlin-Oct 24-MSc Data Analytics G4-UCA-MSc -Y1-T2-Big Data Analytics**
    - the intake would be ****: **Oct 24**
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be :  **Usman Akhtar** **( ignore what’s between brackets in the cell)**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be : **301**
    
    ---
    
    - **For example-13**
        - take the row that has data  from the excel sheet  as following
        - **Summary : *F25-Berlin-Oct 24-MSc Data Analytics G5-UCA-MSc -Y1-T2-Big Data Analytics***
        - **Room :  212**
        - **Staff :**  **Ahmed Hassan (AHassan)**
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : *MSc Data Analytics***
    - **Module would be** :  ***Big Data Analytics***
    - **Intake would be** : ***Oct 24***
    - **Professor would be**: *whatever in the staff cell* : **Ahmed Hassan ( ignore what’s between brackets in the cell)**
    - **Room would be**: whatever in the Room Cell :**212**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - For example : ***F25-Berlin-Oct 24-MSc Data Analytics G5***
        - Becomes ***MSc Data Analytics***  And that's the program name.
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example : ***G5-UCA-MSc -Y1-T2-Big Data Analytics***
        - ignore this strand : ***G5-UCA-MSc -Y1-T2-***
        - Becomes ***Big Data Analytics*** And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary : ***F25-Berlin-Oct 24-MSc Data Analytics G5-UCA-MSc -Y1-T2-Big Data Analytics***
    - the intake would be ****: ***Oct 24***
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be : **Ahmed Hassan ( ignore what’s between brackets in the cell)**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be  : **212**
    
    ---
    
    - **For example-14**
        - take the row that has data  from the excel sheet  as following
        - **Summary : *F25-Berlin-Oct 24-MSc in Engineering Management G1-UNINNETTUNO-MSc -Y1-T2-Production Planning and Control***
        - **Room :  313**
        - **Staff :**  Sergio  Fuentes Ruiz (Dr. Sergio Fuentes Ruiz)
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : *MSc in Engineering Management***
    - **Module would be** :  ***Production Planning and Control***
    - **Intake would be** : ***Oct 24***
    - **Professor would be**: *whatever in the staff cell* : **Sergio  Fuentes Ruiz**  **( ignore what’s between brackets in the cell)**
    - **Room would be**: whatever in the Room Cell : **313**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - For example  ***F25-Berlin-Oct 24-MSc in Engineering Management G1***
        - Becomes ***MSc in Engineering Management***. And that's the program name.
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example :***G1-UNINNETTUNO-MSc -Y1-T2-Production Planning and Control***
        - ignore this strand : ***G1-UNINNETTUNO-MSc -Y1-T2-***
        - Becomes ***Production Planning and Control*** And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary ***F25-Berlin-Oct 24-MSc in Engineering Management G1-UNINNETTUNO-MSc -Y1-T2-Production Planning and Control***
    - the intake would be ****: ***Oct 24***
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be : **Sergio  Fuentes Ruiz**  **( ignore what’s between brackets in the cell)**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be :  **313**
    
    ---
    
    - **Edge cases :**
    - **first edge case : G followed by Number (G1, G2, G3, G4, G5) do not exist in the summary line**
    - **For example-1**
        - take the row that has data  from the excel sheet  as following
        - **Summary : F25-Berlin-Feb 25-MSc Sports Management-UCA-MSc -Y1-T1-Corporate Finance in Sports Management**
        - **Room :  407**
        - **Staff :**  **Rabia Luqman (Dr.RLuqman)**
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : MSc Sports Management**
    - **Module would be** :  **Corporate Finance in Sports Management**
    - **Intake would be** : **Feb 25**
    - **Professor would be**: *whatever in the staff cell :* **Rabia Luqman ( ignore what’s between brackets in the cell)**
    - **Room would be**: whatever in the Room Cell :**407**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - Now, when you look for G followed by a number in the summary line you won’t find it.
        - G followed by a number is part of strand you find it in each summary line, as shown in the 14 cases i shared with you before.
        - the strand will look : G2-UCA-MSc -Y1-T1- / G1-UCA-MSc -Y1-T1- / G1-UNINNETTUNO-MSc -Y1-T1- / G3-UCA-BSc-Y2-T5-
        - Then your guide to end program line is the next symbole in the strand, in our case UCA
        - so the The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before UCA, or what ever the strand starts with you.
        - For example  **F25-Berlin-Feb 25-MSc Sports Management-UCA**
        - Becomes ****MSc Sports Management**. And that's the program name.
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - again, when you look for G followed by a number in the summary line you won’t find it.
        - G followed by a number is part of strand you find it in each summary line, as shown in the 14 cases i shared with you before.
        - the strand will look : G2-UCA-MSc -Y1-T1- / G1-UCA-MSc -Y1-T1- / G1-UNINNETTUNO-MSc -Y1-T1- / G3-UCA-BSc-Y2-T5-
        - Then your guide to look for the stand after which the module name will  is the next symbole in the strand,again,  in our case UCA
        - For example **-UCA-MSc -Y1-T1-Corporate Finance in Sports Management**
        - ignore this strand **-UCA-MSc -Y1-T1-**
        - Becomes **Corporate Finance in Sports Management** **And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary **: F25-Berlin-Feb 25-MSc Sports Management-UCA-MSc -Y1-T1-Corporate Finance in Sports Management**
    - the intake would be **Feb 25**
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be **Rabia Luqman ( ignore what’s between brackets in the cell)**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be **407**
    
    ---
    
    - **The next edge case too long Program name & Module name**
    - **For example-2**
        - take the row that has data  from the excel sheet  as following
        - **Summary : F25-Berlin-May 24-MSc Information Technology Management - Pathway Project Management - G1-UCA-MSc-Y1-T3-Pathway Project Management: IT Project Management**
        - **Room :  207**
        - **Staff :  Dr. Alina Baskakova**
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : MSc Information Technology Management**
    - **Module would be** :  **Pathway Project Management**
    - **Intake would be** : **May 24**
    - **Professor would be**: *whatever in the staff cell :* Dr. Alina Baskakova
    - **Room would be**: whatever in the Room Cell : **207**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - **Now, obvioulsy we have a long program name, that won’t look good on a info screen, it will look crammed and overwhelming**
        - *The the class information to be displayed on the info screen is only heuristic , and it supposed to guid students to thier class room,*
        - *it needs to have the essential info that would serve the student.*
        - *it doesnt have to mirror the raw data in the excel sheet*
        - *Whenever you see and overwhelming line simplify it, do an educated guess based on the clean examples i share with you before, for the program name to be tconcise yet meaningful*
        - For example : **F25-Berlin-May 24-MSc Information Technology Management - Pathway Project Management - G1**
        - Becomes ****MSc Information Technology Management** And that's the program name.
        - this part : **- Pathway Project Management, is gonna make the Program name line crammed and overwhelming.**
        - so we Ignore : - **Pathway Project Management-**
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example **- G1-UCA-MSc-Y1-T3-Pathway Project Management: IT Project Management**
        - ignore this strand **- G1-UCA-MSc-Y1-T3-**
        - again, here, if we took the whole line after the strand, **it will look crammed and overwhelming**
        - *The the class information to be displayed on the info screen is only heuristic , and it supposed to guid students to thier class room,*
        - *it needs to have the essential info that would serve the student.*
        - *it doesnt have to mirror the raw data in the excel sheet*
        - *Whenever you see and overwhelming line simplify it, do an educated guess based on the clean examples i share with you before, for the program name to be tconcise yet meaningful*
        - so for, the long Module Name , **Pathway Project Management: IT Project Management**
        - we simplify it, so it Becomes  **Pathway Project Management** **And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary **F25-Berlin-May 24-MSc Information Technology Management - Pathway Project Management - G1-UCA-MSc-Y1-T3-Pathway Project Management: IT Project Management**
    - the intake would be **May 24**
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be :  Dr. Alina Baskakova
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be : **207**
    
    ---
    
    - **For example-3**
        - take the row that has data  from the excel sheet  as following
        - **Summary : *F25-Berlin-Oct 22-Oct 24-BSc (Hons) International Business and Management - Pathway One-Strategic Leadership - G1-UCA-BSc-Y3-T8-Pathway One-Strategic Leadership:Intersectoral Management: Government, Business and Non profits (Top Up)***
        - **Room :  211 B**
        - **Staff :**  **Umer Khayyam**
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : *BSc (Hons) International Business and Management***
    - **Module would be** :  ***Pathway One-Strategic Leadership***
    - **Intake would be** : ***Oct 22***
    - **Professor would be** : *whatever in the staff cell :* **Umer Khayyam**
    - **Room would be** whatever in the Room Cell : **211 B**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - **Now, obvioulsy we have a long program name, that won’t look good on a info screen, it will look crammed and overwhelming**
        - *The the class information to be displayed on the info screen is only heuristic , and it supposed to guid students to thier class room,*
        - *it needs to have the essential info that would serve the student.*
        - *it doesnt have to mirror the raw data in the excel sheet*
        - *Whenever you see and overwhelming line simplify it, do an educated guess based on the clean examples i share with you before, for the program name to be concise yet meaningful*
        - For example  ***F25-Berlin-Oct 22-Oct 24-BSc (Hons) International Business and Management - Pathway One-Strategic Leadership - G1-***
        - Becomes ***BSc (Hons) International Business and Management***  And that's the program name.
        - this part : **- *Pathway One-Strategic Leadership-* is gonna make the Program name line crammed and overwhelming.**
        - so we Ignore :  ***- Pathway One-Strategic Leadership-***
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example ***- G1-UCA-BSc-Y3-T8-Pathway One-Strategic Leadership:Intersectoral Management: Government, Business and Non profits (Top Up)***
        - ignore this strand ***- G1-UCA-BSc-Y3-T8-***
        - again, here, if we took the whole line after the strand, **it will look crammed and overwhelming**
        - *The the class information to be displayed on the info screen is only heuristic , and it supposed to guid students to thier class room,*
        - *it needs to have the essential info that would serve the student.*
        - *it doesnt have to mirror the raw data in the excel sheet*
        - *Whenever you see and overwhelming line simplify it, do an educated guess based on the clean examples i share with you before, for the program name to be tconcise yet meaningful*
        - so for, the long Module Name , ***Pathway One-Strategic Leadership:Intersectoral Management: Government, Business and Non profits (Top Up)***
        - we simplify it, so it Becomes  ***Pathway One-Strategic Leadership*** And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary  ***F25-Berlin-Oct 22-Oct 24-BSc (Hons) International Business and Management - Pathway One-Strategic Leadership - G1-UCA-BSc-Y3-T8-Pathway One-Strategic Leadership:Intersectoral Management: Government, Business and Non profits (Top Up)***
    - the intake would be ****: ***Oct 22***
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be : **Umer Khayyam**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be : **211 B**
    
    ---
    
    - **For example-4**
        - take the row that has data  from the excel sheet  as following
        - **Summary : F25-Berlin-Oct 24-BSc (Hons) International Business and Management (International Route) G2-UCA-BAF-Y1-T2-English for Academic Purposes, Research and Study Skills**
        - **Room :  D305**
        - **Staff :**  **Ali Jaber Matin**
        
        ---
        
- **How to map this row into the downloadable sheet pdf-png :**
    - **The program would be : BSc (Hons) International Business and Management**
    - **Module would be** :  **English for Academic Purposes**
    - **Intake would be** : **Oct 24**
    - **Professor would be**: *whatever in the staff cell .***Ali Jaber Matin**
    - **Room would be**: whatever in the Room Cell :**407**
    
    ---
    
- **The criteria of the extraction from the excel sheet :**
    - **For the program name :**
        - The program start with BAF, MA ,MSc, BSc, MBA, BA, Global, and ends with the last word before G followed by number, for example -G1,-G2, -G3
        - **Now, obvioulsy we have a long program name, that won’t look good on a info screen, it will look crammed and overwhelming**
        - *The the class information to be displayed on the info screen is only heuristic , and it supposed to guid students to thier class room,*
        - *it needs to have the essential info that would serve the student.*
        - *it doesnt have to mirror the raw data in the excel sheet*
        - *Whenever you see and overwhelming line simplify it, do an educated guess based on the clean examples i share with you before, for the program name to be concise yet meaningful*
        - For example  **F25-Berlin-Oct 24-BSc (Hons) International Business and Management (International Route) G2**
        - Becomes ***BSc (Hons) International Business and Management*** And that's the program name.
        - this part : **(International Route) is gonna make the Program name line crammed and overwhelming.**
        - so we Ignore : **(International Route) ****
        
        ---
        
    - **For the module…**
        - The module name will start after the strand for symbols that start with G followed by the number for example -G1,-G2, -G3
        - For example **G2-UCA-BAF-Y1-T2-English for Academic Purposes, Research and Study Skills**
        - ignore this strand **G2-UCA-BAF-Y1-T2-**
        - again, here, if we took the whole line after the strand, **it will look crammed and overwhelming**
        - *The the class information to be displayed on the info screen is only heuristic , and it supposed to guid students to thier class room,*
        - *it needs to have the essential info that would serve the student.*
        - *it doesnt have to mirror the raw data in the excel sheet*
        - *Whenever you see and overwhelming line simplify it, do an educated guess based on the clean examples i share with you before, for the program name to be tconcise yet meaningful*
        - so for, the long Module Name , **English for Academic Purposes, Research and Study Skills**
        - we simplify it, so it Becomes **English for Academic Purposes ****And that's the Module name.
        
        ---
        
- **For the Intake ..**
    - Intake format is Month-Year, for example : Oct-23, or Oct 23, or Feb-23 or Feb 23
    - For example for the summary **F25-Berlin-Oct 24-BSc (Hons) International Business and Management (International Route) G2-UCA-BAF-Y1-T2-English for Academic Purposes, Research and Study Skills**
    - the intake would be **Oct 24**
    
    ---
    
- **For professor**
    - As mentioned before, whatever is written in the staff cell..
    - In this case would be **Ali Jaber Matin**
    
    ---
    
- **For Room**
    - As mentioned before, whatever is the number in the room cell..
    - In this case would be **D305**
    
    ---