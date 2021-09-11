import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Examples.css';
import { listExamples } from '../actions/listExamples';
const Examples = () => {
  const dispatch = useDispatch();

  const exampleDetails = useSelector((state) => state.exampleDetails);

  const { loading, error, examples } = exampleDetails;
  useEffect(() => {
    dispatch(listExamples());
  }, [dispatch]);
  return (
    <>
      {loading
        ? console.log('data is loading')
        : error
        ? console.log('error')
        : examples && (
            <ul className="products-list-container">
              {examples.map((example) => (
                <li>
                  <div className="ex">
                    <a
                      href={`/photo/${example._id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <img
                        src={example.image}
                        alt={example.title}
                        className="images"
                      />
                      <h3>{example.title}</h3>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
    </>
  );
};

export default Examples;
