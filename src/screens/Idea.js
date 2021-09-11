import React, { useEffect } from 'react';
import Header from '../components/Header';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import './Idea.css';
import { useDispatch, useSelector } from 'react-redux';
import { listExamples } from '../actions/listExamples';
const Idea = ({ match }) => {
  const exampleId = match.params.id;
  const dispatch = useDispatch();

  const exampleDetails = useSelector((state) => state.exampleDetails);

  const { loading, error, examples } = exampleDetails;

  const myExample = examples.find((example) => example._id === exampleId);
  useEffect(() => {
    dispatch(listExamples());
  }, [dispatch]);
  return (
    <>
      <div>
        <Header2 />
        <Header />
        <div className="core">
          {myExample && (
            <>
              <div className="ex-img">
                <img src={myExample.image} alt={myExample.title} />
              </div>
              <div className="info">
                <div className="title">
                  <h1> {myExample.title}</h1>
                </div>
                <div className="description">
                  <h5>{myExample.description}</h5>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Idea;
