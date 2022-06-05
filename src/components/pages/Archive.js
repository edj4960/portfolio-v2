import React from 'react';
import { ARCHIVE_WORK } from '../../Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { openUrl } from '../../util';

import './Archive.scss';

const Archive = () => {

  const renderLinks = (links) => {
    if (!links) return;

    return (
      <>
        {
          links.link &&
          <FontAwesomeIcon
            icon={faUpRightFromSquare}
            onClick={() => openUrl(links.link)}
          />
        }
        {
          links.github &&
          <FontAwesomeIcon
            icon={faGithub}
            onClick={() => openUrl(links.github)}
          />
        }
        {
          links.androidLink &&
          <FontAwesomeIcon
            icon={faGooglePlay}
            onClick={() => openUrl(links.androidLink)}
          />
        }
        {
          links.iosLink &&
          <FontAwesomeIcon
            icon={faAppStore}
            fontSize={25}
            onClick={() => openUrl(links.iosLink)}
          />
        }
      </>
    )
  }

  return (
    <div id='archive-page'>
      <h1 className='txt-primary'>Archive</h1>
      <h4 className='txt-light'>Things I have worked on</h4>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Title</th>
            <th>Made at</th>
            <th>Built with</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {
            ARCHIVE_WORK.map(entry => {
              return (
                <tr key={entry.title}>
                  <td className='txt-grey'>{entry.year}</td>
                  <td>{entry.title}</td>
                  <td className='txt-grey'>{entry.madeAt}</td>
                  <td className='built-with-entry'>{entry.builtWith.join(' • ')}</td>
                  <td className='links-entry'>{renderLinks(entry.links)}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Archive;